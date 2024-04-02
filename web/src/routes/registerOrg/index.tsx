import { useState, useEffect } from "react";

import FindAFriendPanel from "../login/components/findAFriendPanel";

import {
  InputsContainer,
  RegisterOrgContainer,
  RightSideContainer,
} from "../../styles/pages/registerOrg/styles";
import InputFormatted from "../login/components/inputFormatted";
import ButtonFormatted from "../login/components/buttonFormatted";
import ShowInMap from "./components/showInMap";

export interface OrgRegisterDetails {
  name: string;
  adress: string;
  CEP: string;
  city: string;
  phone: string;
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface setPositions {
  latitude: number;
  longitude: number;
}

export default function RegisterOrg() {
  const [orgDetailsForRegister, setOrgDetailsForRegister] =
    useState<OrgRegisterDetails>();
  const [passwordDontMath, setPasswordDontMath] = useState(false);
  const [position, setPosition] = useState<setPositions>();

  function handleChangeOrgDetailsForRegister(
    value: string,
    inputTitle: string
  ) {
    setOrgDetailsForRegister({
      ...orgDetailsForRegister!,
      [inputTitle]: value,
    });
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
  }, []);

  //   useEffect(() => {
  //     if (
  //       orgDetailsForRegister?.confirmPassword !== orgDetailsForRegister?.password
  //     ) {
  //       setPasswordDontMath(true);
  //     }

  //     if (
  //       orgDetailsForRegister?.confirmPassword === orgDetailsForRegister?.password
  //     ) {
  //       setPasswordDontMath(false);
  //     }
  //   }, [orgDetailsForRegister?.password]);

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

          <InputFormatted
            inputTitle="Senha"
            isPassword={true}
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "phone")
            }
          />

          <InputFormatted
            inputTitle="Confirmar Senha"
            isPassword={true}
            handleChangeAccountDetails={(value) =>
              handleChangeOrgDetailsForRegister(value, "confirmPassword")
            }
          />
          {passwordDontMath && <div>Senhas não coincidem!</div>}
        </InputsContainer>

        <ButtonFormatted variant="register" text="Cadastrar" />
      </RightSideContainer>
    </RegisterOrgContainer>
  );
}
