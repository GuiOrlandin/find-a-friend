import {
  Container,
  SearchButton,
  SelectCityContainer,
  SelectStateContainer,
} from "./styles";
import searchIcon from "../../../../assets/searchIcon.svg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

export interface State {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
}

export interface Cities {
  nome: string;
  codigo_ibge: string;
}

interface Props {
  variant: string;
  setStateAndCity?: (city: string, state: string) => void;
}

export default function SelectStateCityAndSearchButton({
  variant,
  setStateAndCity,
}: Props) {
  const [stateSelected, setStateSelected] = useState("RO");
  const [citySelected, setCitySelected] = useState("");
  const { data: states, isLoading } = useQuery<State[]>({
    queryKey: ["list-of-states"],
    queryFn: async () => {
      return axios
        .get("https://brasilapi.com.br/api/ibge/uf/v1")
        .then((response) => response.data);
    },
  });

  const { data: cities, refetch } = useQuery<Cities[]>({
    queryKey: ["list-of-cities"],
    queryFn: async () => {
      return axios
        .get(
          `https://brasilapi.com.br/api/ibge/municipios/v1/${stateSelected}?providers=dados-abertos-br,gov,wikipedia`
        )
        .then((response) => response.data);
    },
  });

  function handleUpdateState(event: ChangeEvent<HTMLSelectElement>) {
    setStateSelected(event.target.value);
  }

  function handleUpdateCity(event: ChangeEvent<HTMLSelectElement>) {
    setCitySelected(event.target.value);
  }

  useEffect(() => {
    refetch();
  }, [stateSelected]);

  return (
    <Container>
      {isLoading ? (
        <>
          <SelectStateContainer>
            <option>PE</option>;
          </SelectStateContainer>
          <SelectCityContainer value={citySelected} onChange={handleUpdateCity}>
            <select>
              <option>ARIQUEMES</option>
            </select>
          </SelectCityContainer>
        </>
      ) : (
        <>
          <SelectStateContainer
            value={stateSelected}
            onChange={handleUpdateState}
            variant={variant}
          >
            {states?.map((state) => (
              <option key={state.id}>{state.sigla}</option>
            ))}
          </SelectStateContainer>
          <SelectCityContainer
            value={citySelected}
            onChange={handleUpdateCity}
            variant={variant}
          >
            {cities?.map((city) => (
              <option key={city.codigo_ibge}>{city.nome}</option>
            ))}
          </SelectCityContainer>
        </>
      )}

      <SearchButton
        variant={variant}
        onClick={() => setStateAndCity!(citySelected, stateSelected)}
      >
        <img src={searchIcon} alt="" />
      </SearchButton>
    </Container>
  );
}
