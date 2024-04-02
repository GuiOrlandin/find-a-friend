import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthenticateMutate } from "../../hooks/useAuthenticateMutate";

import InputFormatted from "./components/inputFormatted";
import ButtonFormatted from "./components/buttonFormatted";

import animalsLogo from "../../assets/animalsLogo.svg";
import logoFindAFriend from "../../assets/findAFriendLogo.svg";
import {
  ButtonsFormattedContainer,
  ErrorContainer,
  LeftSideContainer,
  LoginContainer,
  LogoFindAFriendContainer,
  RightSideContainer,
} from "../../styles/pages/login/styles";
import FindAFriendPanel from "./components/findAFriendPanel";

export interface AccountDetails {
  password: string;
  email: string;
}

export default function Login() {
  const [accountDetails, setAccountDetails] = useState<AccountDetails>();
  const [authenticateError, setAuthenticateError] = useState(false);
  const { mutate, isSuccess, isError } = useAuthenticateMutate();

  const navigate = useNavigate();

  function handleAccountAuthenticate() {
    mutate(accountDetails!);
  }
  function handleRegisterOrg() {
    navigate(`/registerOrg`);
  }

  function handleChangeAccountDetails(value: string, inputTitle: string) {
    setAccountDetails({
      ...accountDetails!,
      [inputTitle]: value,
    });
  }

  useEffect(() => {
    if (isSuccess) {
      navigate(`/`);
    }

    if (isError) {
      setAuthenticateError(true);
    }
  }, [isSuccess, isError]);

  return (
    <LoginContainer>
      <FindAFriendPanel />;
      <RightSideContainer>
        <h1>Boas-Vindas!</h1>

        <InputFormatted
          inputTitle="Email"
          isPassword={false}
          handleChangeAccountDetails={(value) =>
            handleChangeAccountDetails(value, "email")
          }
        />
        <InputFormatted
          inputTitle="Senha"
          isPassword={true}
          handleChangeAccountDetails={(value) =>
            handleChangeAccountDetails(value, "password")
          }
        />

        {authenticateError ? (
          <ErrorContainer>Usuário ou senha estão incorretos.</ErrorContainer>
        ) : (
          <div></div>
        )}

        <ButtonsFormattedContainer>
          <ButtonFormatted
            variant="login"
            text="Login"
            onClick={handleAccountAuthenticate}
          />
          <ButtonFormatted
            variant=""
            text="Cadastrar minha organização"
            onClick={handleRegisterOrg}
          />
        </ButtonsFormattedContainer>
      </RightSideContainer>
    </LoginContainer>
  );
}
