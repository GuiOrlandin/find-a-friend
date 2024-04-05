import { useEffect, useState } from "react";

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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

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

export interface OrgResponse {
  name: string;
  adress: string;
  CEP: string;
  city: string;
  phone: string;
  email: string;
  password: string;
}

export default function PetRegister() {
  const [petRegisterDetails, setPetRegisterDetails] =
    useState<petRegisterDetails>();
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.state;

  const { data: orgInfo } = useQuery<OrgResponse[]>({
    queryKey: ["org-info"],
    queryFn: async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      return axios
        .get(
          "http://localhost:3333/orgInfo?email=guiorlandin%40gmail.com",
          config
        )
        .then((response) => response.data);
    },
  });

  function handleChangePetDetailsForRegister(
    value: string,
    inputTitle: string
  ) {
    setPetRegisterDetails({
      ...petRegisterDetails!,
      [inputTitle]: value,
    });
  }

  useEffect(() => {
    if (orgInfo === undefined) {
      navigate("/login");
    }
  }, []);
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
