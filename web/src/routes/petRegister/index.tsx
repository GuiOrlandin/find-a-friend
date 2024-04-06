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
import { useNavigate } from "react-router-dom";
import { tokenStore } from "../../store/tokenStore";

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
  const navigate = useNavigate();
  const storeToken = localStorage.getItem("storeToken");
  const token = tokenStore((state) => state.token);

  const { data: orgInfo } = useQuery<OrgResponse[]>({
    queryKey: ["org-info"],
    queryFn: async () => {
      const authToken = token || storeToken || "";
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
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
    if (token) {
      localStorage.setItem("storeToken", token);
    }
  }, [token]);

  useEffect(() => {
    if (!token && !storeToken) {
      navigate("/login");
    }
  }, [token, storeToken, navigate]);
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
            pageWithTheComponent="petRegister"
            handleChangeAccountDetails={(value) =>
              handleChangePetDetailsForRegister(value, "nome")
            }
            inputActive="text"
          />

          <InputFormatted
            inputTitle="Sobre"
            pageWithTheComponent="petRegister"
            handleChangeAccountDetails={(value) =>
              handleChangePetDetailsForRegister(value, "nome")
            }
            inputActive="about"
          />
        </FormPetRegisterContainer>
      </FormAndOrgInfoContainer>
    </PetRegisterContainer>
  );
}
