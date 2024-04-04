import { useState } from "react";

import {
  BackgroundLogo,
  FormAndOrgInfoContainer,
  FormPetRegisterContainer,
  LogoutButton,
  OrgInformationContainer,
  OrgNameAndAddressContainer,
  PetRegisterContainer,
  TitleAndBorderBottom,
} from "../../styles/pages/petRegister/styles";

import littleLogoFace from "../../assets/littleLogoFace.svg";

import { LuLogOut } from "react-icons/lu";
import InputFormatted from "../login/components/inputFormatted";

interface petRegisterDetails {
  name: string;
  city: string;
  description: string;
  age: string;
  energyLevel: string;
  animalSize: string;
  animalType: string;
  levelOfIndependence: string;
  enviroment: string;
  petImage: string;
  requirement: string;
}

export default function PetRegister() {
  const [petRegisterDetails, setPetRegisterDetails] =
    useState<petRegisterDetails>();

  function handleChangePetDetailsForRegister(
    value: string,
    inputTitle: string
  ) {
    setPetRegisterDetails({
      ...petRegisterDetails!,
      [inputTitle]: value,
    });
  }
  return (
    <PetRegisterContainer>
      <FormAndOrgInfoContainer>
        <OrgInformationContainer>
          <BackgroundLogo>
            <img src={littleLogoFace} alt="" width={27} />
          </BackgroundLogo>
          <OrgNameAndAddressContainer>
            <h1>Seu Cãopanheiro</h1>
            <span>Rua do meio, 123 , Boa viagem, Recife - PE </span>
          </OrgNameAndAddressContainer>

          <LogoutButton>
            <LuLogOut color="FFFFFF" />
          </LogoutButton>
        </OrgInformationContainer>
        <FormPetRegisterContainer>
          <TitleAndBorderBottom>
            <h1>Adicione um pet</h1>
          </TitleAndBorderBottom>

          <InputFormatted
            inputTitle="Nome"
            isPassword={false}
            isPetRegister={true}
            handleChangeAccountDetails={(value) =>
              handleChangePetDetailsForRegister(value, "nome")
            }
            isText={true}
          />

          <InputFormatted
            inputTitle="Sobre"
            isPassword={false}
            isPetRegister={true}
            handleChangeAccountDetails={(value) =>
              handleChangePetDetailsForRegister(value, "nome")
            }
            isAbout={true}
          />
        </FormPetRegisterContainer>
      </FormAndOrgInfoContainer>
    </PetRegisterContainer>
  );
}
