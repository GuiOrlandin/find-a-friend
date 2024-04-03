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
  role: "ADMIN";
}

export interface setPositions {
  latitude: number;
  longitude: number;
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
      role: "ADMIN",
    });
  const [errorFound, setErrorFound] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneIsCorrect, setPhoneIsCorrect] = useState("");
  const [position, setPosition] = useState<setPositions>();
  const { mutate, isError, isSuccess, error } = useOrgRegisterMutate();

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
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
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
            isPassword={false}
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "name")
            }
          />

          <InputFormatted
            inputTitle="Email"
            isPassword={false}
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "email")
            }
          />
          <InputFormatted
            inputTitle="CEP"
            isPassword={false}
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "CEP")
            }
          />
          <InputFormatted
            inputTitle="Cidade"
            isPassword={false}
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "city")
            }
          />

          <InputFormatted
            inputTitle="Endereço"
            isPassword={false}
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "adress")
            }
          />
          <div>
            <ShowInMap positionDetails={position!} />
          </div>

          <InputFormatted
            inputTitle="Whatsapp"
            isPassword={false}
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "phone")
            }
          />
          {}

          <InputFormatted
            inputTitle="Senha"
            isPassword={true}
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "password")
            }
          />

          <InputFormatted
            inputTitle="Confirmar Senha"
            isPassword={true}
            handleChangeAccountDetails={(value) => setConfirmPassword(value)}
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
