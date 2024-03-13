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

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/findPet");
  }

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
            clickAction={handleNavigate}
          />
        </SearchFriendParameters>
      </RightSideOfHome>
    </HomeContainer>
  );
}
