import { useState, useEffect } from "react";

import FindAFriendPanel from "../login/components/findAFriendPanel";

import {
  AlreadyRegistered,
  ErrorMessage,
  InputsContainer,
  RegisterAndAlreadyRegisteredButtonContainer,
  RegisterOrgContainer,
  RightSideContainer,
} from "../../styles/pages/registerOrg/styles";
import InputFormatted from "../login/components/inputFormatted";
import ButtonFormatted from "../login/components/buttonFormatted";
import ShowInMap from "./components/showInMap";
import { useNavigate } from "react-router-dom";
import { useOrgRegisterMutate } from "../../hooks/useOrgRegisterMutate";

export interface OrgRegisterDetails {
  name: string;
  adress: string;
  CEP: string;
  city: string;
  phone: string;
  email: string;
  password: string;
  state: string;
  role: "ADMIN";
}

export interface setPositions {
  latitude: string;
  longitude: string;
}

export default function RegisterOrg() {
  const [orgDetailsForRegister, setOrgDetailsForRegister] =
    useState<OrgRegisterDetails>({
      name: "",
      adress: "",
      CEP: "",
      city: "",
      phone: "",
      email: "",
      password: "",
      state: "",
      role: "ADMIN",
    });
  const [errorFound, setErrorFound] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [position, setPosition] = useState<setPositions>();
  const { mutate, isSuccess, error } = useOrgRegisterMutate();

  const navigate = useNavigate();

  function handleChangeOrgDetailsForRegister(
    value: string,
    inputTitle: string
  ) {
    setOrgDetailsForRegister({
      ...orgDetailsForRegister!,
      [inputTitle]: value,
    });
  }

  function handleOrgRegister() {
    if (orgDetailsForRegister?.password !== confirmPassword) {
      return setErrorFound("Senhas não coincidem!");
    }

    if (orgDetailsForRegister.phone.length < 9) {
      return setErrorFound(
        "O número de telefone precisa ter mais de 9 dígitos."
      );
    }

    if (orgDetailsForRegister.password.length <= 5) {
      return setErrorFound("A senha precisa ter mais de 5 dígitos.");
    }
    mutate(orgDetailsForRegister!);
    setErrorFound("");
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: JSON.stringify(position.coords.latitude),
          longitude: JSON.stringify(position.coords.longitude),
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }

    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <RegisterOrgContainer>
      <FindAFriendPanel />
      <RightSideContainer>
        <InputsContainer>
          <h1>Cadastre sua organização </h1>

          <InputFormatted
            inputTitle="Nome do responsável"
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "name")
            }
            inputActive="text"
            pageWithTheComponent="orgRegister"
          />

          <InputFormatted
            inputTitle="Email"
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "email")
            }
            inputActive="text"
            pageWithTheComponent="orgRegister"
          />
          <InputFormatted
            inputTitle="CEP"
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "CEP")
            }
            inputActive="text"
            pageWithTheComponent="orgRegister"
          />
          <InputFormatted
            inputTitle="Cidade"
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value.toLowerCase(), "city")
            }
            inputActive="text"
            pageWithTheComponent="orgRegister"
          />

          <InputFormatted
            inputTitle="Endereço"
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "adress")
            }
            inputActive="text"
            pageWithTheComponent="orgRegister"
          />
          <InputFormatted
            inputTitle="Estado"
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "state")
            }
            inputActive="text"
            pageWithTheComponent="orgRegister"
          />
          <div>
            <ShowInMap positionDetails={position!} />
          </div>

          <InputFormatted
            inputTitle="Whatsapp"
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "phone")
            }
            inputActive="text"
            pageWithTheComponent="orgRegister"
          />

          <InputFormatted
            inputTitle="Senha"
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "password")
            }
            inputActive="password"
            pageWithTheComponent="orgRegister"
          />

          <InputFormatted
            inputTitle="Confirmar Senha"
            handleChangeAccountDetails={(value) => setConfirmPassword(value)}
            inputActive="password"
            pageWithTheComponent="orgRegister"
          />
          {errorFound.length > 1 && <ErrorMessage>{errorFound}</ErrorMessage>}
          {error?.message === "Request failed with status code 409" &&
            errorFound.length < 1 && (
              <ErrorMessage>Email ja em uso!</ErrorMessage>
            )}
        </InputsContainer>

        <RegisterAndAlreadyRegisteredButtonContainer>
          <ButtonFormatted
            variant="register"
            text="Cadastrar"
            onClick={handleOrgRegister}
          />
          <AlreadyRegistered onClick={() => navigate("/login")}>
            Já possui conta?
          </AlreadyRegistered>
        </RegisterAndAlreadyRegisteredButtonContainer>
      </RightSideContainer>
    </RegisterOrgContainer>
  );
}
