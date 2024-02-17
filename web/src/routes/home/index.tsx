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
// import { useQuery } from "@tanstack/react-query";
// import { Pet, findPetStore } from "../../store/findPetStore";
// import axios from "axios";

export default function Home() {
  // const refreshPetList = findPetStore((state)=> state.refreshPetList)

  // const { data: petList} = useQuery<Pet[]>({
  //   queryKey: ["list-of-cities"],
  //   queryFn: async () => {
  //     return axios
  //       .get(
  //         `http://localhost:3333/pets/available/city?city=${}&page=${}`
  //       )
  //       .then((response) => response.data);
  //   },
  // });

  // function handleRefreshPetList(item: Pet[]){
  //     refreshPetList(item)
  // }

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
          <SelectStateCityAndSearchButton variant="home" />
        </SearchFriendParameters>
      </RightSideOfHome>
    </HomeContainer>
  );
}
