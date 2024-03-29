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
import { Pet, findPetStore } from "../../../../store/findPetStore";
import { Characteristics } from "../../../findPet";

export interface petListResponse {
  pets: Pet[];
}

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
  characteristicsForSearch?: Characteristics;
  clickAction?: () => void;
}

export default function SelectStateCityAndSearchButton({
  variant,
  characteristicsForSearch,
  clickAction,
}: Props) {
  const [stateSelected, setStateSelected] = useState("RO");
  const [citySelected, setCitySelected] = useState("Alta Floresta D'Oeste");
  const refreshPetList = findPetStore((state) => state.refreshPetList);

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

  const { data: petList, refetch: petListRefetch } = useQuery<petListResponse>({
    queryKey: ["list-of-pets"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3333/pets/available/city?city=${citySelected}&page=1`
      );
      return response.data;
    },
  });

  const {
    data: searchPetListWithCharacteristics,
    refetch: petListWithCharacteristicsRefetch,
  } = useQuery<petListResponse>({
    queryKey: ["list-of-pets-with-characteristics"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3333/pets/available/characteristics?animalSize=${characteristicsForSearch?.animalSize}&energyLevel=${characteristicsForSearch?.energyLevel}&city=${citySelected}&age=${characteristicsForSearch?.age}&levelOfIndependence=${characteristicsForSearch?.levelOfIndependence}&page=1`
      );
      return response.data;
    },
  });

  function handleUpdateState(event: ChangeEvent<HTMLSelectElement>) {
    setStateSelected(event.target.value);
  }

  function handleUpdateCity(event: ChangeEvent<HTMLSelectElement>) {
    const words = event.target.value.toLowerCase().split(" ");
    const formattedWords = words!.map((word) => {
      return word.charAt(0).toLowerCase() + word.slice(1);
    });
    const formattedCity = formattedWords.join("%20");
    return setCitySelected(formattedCity);
  }

  useEffect(() => {
    refetch();

    if (variant === "home" && citySelected && petList) {
      petListRefetch();
      refreshPetList(petList.pets);
    }
    if (variant === "findPetPage" && citySelected) {
      petListWithCharacteristicsRefetch();

      if (searchPetListWithCharacteristics) {
        refreshPetList(searchPetListWithCharacteristics!.pets);
        console.log(searchPetListWithCharacteristics);
      }
    }
  }, [
    stateSelected,
    citySelected,
    petList,
    searchPetListWithCharacteristics,
    characteristicsForSearch,
  ]);

  return (
    <Container>
      {isLoading ? (
        <>
          <SelectStateContainer>
            <option>PE</option>;
          </SelectStateContainer>
          <SelectCityContainer onChange={handleUpdateCity}>
            <select>
              <option>ARIQUEMES</option>
            </select>
          </SelectCityContainer>
        </>
      ) : (
        <>
          <SelectStateContainer onChange={handleUpdateState} variant={variant}>
            {states?.map((state) => (
              <option key={state.id}>{state.sigla}</option>
            ))}
          </SelectStateContainer>
          <SelectCityContainer onChange={handleUpdateCity} variant={variant}>
            {cities?.map((city) => (
              <option key={city.codigo_ibge}>{city.nome}</option>
            ))}
          </SelectCityContainer>
        </>
      )}

      <SearchButton variant={variant} onClick={() => clickAction!()}>
        <img src={searchIcon} alt="" />
      </SearchButton>
    </Container>
  );
}
