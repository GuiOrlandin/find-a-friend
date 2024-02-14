import {
  HomeContainer,
  LeftSideOfHome,
  RightSideOfHome,
  SearchFriendParameters,
} from "../../styles/pages/home/styles";
import findAFriendLogo from "../../assets/findAFriendLogo.svg";
import animalsLogo from "../../assets/animalsLogo.svg";
import SelectState from "./components/SelectState";

export default function Home() {
  return (
    <HomeContainer>
      <LeftSideOfHome>
        <img src={findAFriendLogo} alt="Find a Friend Logo" />

        <h1>Leve a felicidade para o seu lar </h1>

        <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
      </LeftSideOfHome>
      <RightSideOfHome>
        <img src={animalsLogo} alt="" />

        <SearchFriendParameters>
          <p>Busque um amigo:</p>
          <SelectState />
        </SearchFriendParameters>
      </RightSideOfHome>
    </HomeContainer>
  );
}
