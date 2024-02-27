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

import { useNavigate } from "react-router-dom";

interface petListResponse {
  pets: Pet[];
}

interface CityAndState {
  city: string;
  state: string;
}

export default function Home() {
  const [cityAndState, setCityAndState] = useState<CityAndState>();
  const refreshPetList = findPetStore((state) => state.refreshPetList);
  const pet = findPetStore((state) => state.pet);

  const navigate = useNavigate();

  async function formatCity() {
    const words = cityAndState!.city.toLowerCase().split(" ");
    const formattedWords = words!.map((word) => {
      return word.charAt(0).toLowerCase() + word.slice(1);
    });
    const formattedCity = formattedWords.join("%20");
    return formattedCity;
  }

  const { data: petList, refetch } = useQuery<petListResponse>({
    queryKey: ["list-of-pets"],
    queryFn: async () => {
      const formattedCity = await formatCity();

      const response = await axios.get(
        `http://localhost:3333/pets/available/city?city=${formattedCity}&page=1`
      );
      return response.data;
    },
  });

  async function handleSetStateAndCity(city: string, state: string) {
    setCityAndState({ city, state });
  }

  useEffect(() => {
    if (cityAndState) {
      refetch();
    }

    if (petList && cityAndState) {
      refreshPetList(petList.pets);
      navigate("/findPet");
    }
  }, [petList, cityAndState]);

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
