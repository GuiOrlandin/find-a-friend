import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthenticateMutate } from "../../hooks/useAuthenticateMutate";

import InputFormatted from "./components/inputFormatted";
import ButtonFormatted from "./components/buttonFormatted";

import {
  ButtonsFormattedContainer,
  ErrorContainer,
  LoginContainer,
  RightSideContainer,
} from "../../styles/pages/login/styles";
import FindAFriendPanel from "./components/findAFriendPanel";
import { tokenStore } from "../../store/tokenStore";

export interface AccountDetails {
  password: string;
  email: string;
}

export default function Login() {
  const [accountDetails, setAccountDetails] = useState<AccountDetails>();
  const [authenticateError, setAuthenticateError] = useState(false);
  const { mutate, isSuccess, isError, data } = useAuthenticateMutate();
  const saveToken = tokenStore((state) => state.setToken);
  const storeToken = localStorage.getItem("storeToken");

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
      saveToken(data);
      navigate(`/petRegister`, { state: { email: accountDetails?.email } });
    }

    if (isError) {
      setAuthenticateError(true);
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (storeToken) {
      navigate(`/petRegister`);
    }

    if (!accountDetails?.email) {
      localStorage.removeItem("storeToken");
      navigate("/login");
    }
  }, [storeToken, accountDetails?.email]);

  return (
    <LoginContainer>
      <FindAFriendPanel />;
      <RightSideContainer>
        <h1>Boas-Vindas!</h1>

        <InputFormatted
          inputTitle="Email"
          inputActive="text"
          handleChangeAccountDetails={(value) =>
            handleChangeAccountDetails(value, "email")
          }
          pageWithTheComponent="login"
        />
        <InputFormatted
          inputTitle="Senha"
          inputActive="password"
          handleChangeAccountDetails={(value) =>
            handleChangeAccountDetails(value, "password")
          }
          pageWithTheComponent="login"
        />

        {authenticateError ? (
          <ErrorContainer>Usuário ou senha estão incorretos.</ErrorContainer>
        ) : (
          <div></div>
        )}

        <ButtonsFormattedContainer>
          <ButtonFormatted
            variant="true"
            text="Login"
            onClick={handleAccountAuthenticate}
          />
          <ButtonFormatted
            text="Cadastrar minha organização"
            onClick={handleRegisterOrg}
          />
        </ButtonsFormattedContainer>
      </RightSideContainer>
    </LoginContainer>
  );
}
