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
      navigate(`/petRegister`);
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
          isText={true}
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
            variant={true}
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
