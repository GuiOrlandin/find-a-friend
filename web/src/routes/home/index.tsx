import {
  HomeContainer,
  LeftSideOfHome,
  RightSideOfHome,
  SearchFriendParameters,
} from "../../styles/pages/home/styles";
import findAFriendLogo from "../../assets/findAFriendLogo.svg";
import animalsLogo from "../../assets/animalsLogo.svg";
import SelectStateCityAndSearchButton from "./components/SelectStateCityAndSearchButtons";
import LoginOrRegister from "./components/LoginOrRegister";
import { useQuery } from "@tanstack/react-query";
import { Pet, findPetStore } from "../../store/findPetStore";
import axios from "axios";
import { useEffect, useState } from "react";

interface CityAndState {
  city: string;
  state: string;
}

export default function Home() {
  const [cityAndState, setCityAndState] = useState<CityAndState>();
  const refreshPetList = findPetStore((state) => state.refreshPetList);
  const pet = findPetStore((state) => state.pet);

  const city = cityAndState?.city.toLowerCase();

  const { data: petList } = useQuery<Pet[]>({
    queryKey: ["list-of-pets"],
    queryFn: async () => {
      return axios
        .get(
          `http://localhost:3333/pets/available/city?city=americo%20brasiliense&page=1`
        )
        .then((response) => response.data);
    },
  });

  function handleSetStateAndCity(city: string, state: string) {
    setCityAndState({ city, state });
    console.log(pet, "a");
  }

  useEffect(() => {
    refreshPetList(petList!);
  }, [cityAndState, petList]);

  return (
    <HomeContainer>
      <LeftSideOfHome>
        <img src={findAFriendLogo} alt="Find a Friend Logo" />

        <h1>Leve a felicidade para o seu lar </h1>

        <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
      </LeftSideOfHome>
      <RightSideOfHome>
        <LoginOrRegister />

        <img src={animalsLogo} alt="" />

        <SearchFriendParameters>
          <p>Busque um amigo:</p>
          <SelectStateCityAndSearchButton
            variant="home"
            setStateAndCity={handleSetStateAndCity}
          />
        </SearchFriendParameters>
      </RightSideOfHome>
    </HomeContainer>
  );
}
