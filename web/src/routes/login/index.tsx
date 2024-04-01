import {
  LeftSideContainer,
  LoginContainer,
  LogoFindAFriendContainer,
  RightSideContainer,
} from "../../styles/pages/login/styles";

import logoFindAFriend from "../../assets/findAFriendLogo.svg";
import animalsLogo from "../../assets/animalsLogo.svg";
import InputFormatted from "./components/inputFormatted";

export default function Login() {
  return (
    <LoginContainer>
      <LeftSideContainer>
        <LogoFindAFriendContainer>
          <img src={logoFindAFriend} />
        </LogoFindAFriendContainer>
        <img src={animalsLogo} />
      </LeftSideContainer>
      <RightSideContainer>
        <h1>Boas-Vindas!</h1>

        <InputFormatted inputTitle="Email" isPassword={false} />
        <InputFormatted inputTitle="Senha" isPassword={true} />
      </RightSideContainer>
    </LoginContainer>
  );
}
