import {
  BackgroundLogo,
  BigPetImageContainer,
  CharacteristicsPetContainer,
  EnergyEnvironmentAndSizePetInfo,
  EnergyPetInfo,
  EnvironmentPetInfo,
  LittlePetImageContainer,
  OrgImageNameAndAddressContainer,
  OrgInfoContainer,
  OrgNameAndAddressContainer,
  PetInfoContainer,
  PetInfoContent,
  PetRequirements,
  PetRequirementsContent,
  PhoneNumberContainer,
  SizePetInfo,
  WhatsAppRedirectButton,
} from "../../styles/pages/petInfo/styles";
import SideBar from "../petRegister/components/sideBar";

import bigpug from "../../assets/pug1.png";
import littleLogoFace from "../../assets/littleLogoFace.svg";

import { SlEnergy } from "react-icons/sl";
import { FiMaximize } from "react-icons/fi";
import { IoEllipse } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

export default function PetInfo() {
  return (
    <PetInfoContainer>
      <SideBar />
      <PetInfoContent>
        <BigPetImageContainer>
          <img src={bigpug} alt="" />
        </BigPetImageContainer>
        <LittlePetImageContainer>
          <img src={bigpug} alt="" />
          <img src={bigpug} alt="" />
          <img src={bigpug} alt="" />
          <img src={bigpug} alt="" />
          <img src={bigpug} alt="" />
          <img src={bigpug} alt="" />
        </LittlePetImageContainer>
        <CharacteristicsPetContainer>
          <h1>Alfredo</h1>
          <p>
            Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
            fazer companhia, uma bagunça mas também ama uma soneca.
          </p>
          <EnergyEnvironmentAndSizePetInfo>
            <EnergyPetInfo>
              <div>
                <SlEnergy color="#0D3B66" size={20} />
                <SlEnergy color="#0D3B66" size={20} />
                <SlEnergy color="#0D3B66" size={20} />
                <SlEnergy color="#0D3B66" size={20} />

                <SlEnergy color="#d3e2e5" size={20} />
              </div>
              <p>Muita energia</p>
            </EnergyPetInfo>
            <EnvironmentPetInfo>
              <FiMaximize size={20} />
              <p>Ambiente amplo</p>
            </EnvironmentPetInfo>
            <SizePetInfo>
              <div>
                <IoEllipse color="#0D3B66" size={20} />
                <IoEllipse color="#d3e2e5" size={20} />
                <IoEllipse color="#d3e2e5" size={20} />
              </div>
              <p>Pequenino</p>
            </SizePetInfo>
          </EnergyEnvironmentAndSizePetInfo>
          <OrgInfoContainer>
            <OrgImageNameAndAddressContainer>
              <BackgroundLogo>
                <img src={littleLogoFace} alt="" />
              </BackgroundLogo>
              <OrgNameAndAddressContainer>
                <h1>Seu Cãopanheiro</h1>
                <p>Rua do meio, 123 , Boa viagem, Recife - PE </p>
              </OrgNameAndAddressContainer>
            </OrgImageNameAndAddressContainer>
            <PhoneNumberContainer>
              <IoLogoWhatsapp size={24} color="#0D3B66" />
              81 1234.4567
            </PhoneNumberContainer>
          </OrgInfoContainer>
          <PetRequirements>
            <h1>Requesitos para adoção</h1>
            <PetRequirementsContent>
              <IoAlertCircleOutline size={24} color="#F15156" />
              Local grande para o animal correr e brincar.
            </PetRequirementsContent>
            <PetRequirementsContent>
              <IoAlertCircleOutline size={24} color="#F15156" />
              Local grande para o animal correr e brincar.
            </PetRequirementsContent>
          </PetRequirements>
          <WhatsAppRedirectButton>
            <FaWhatsapp size={20}/>
            Entrar em contato
          </WhatsAppRedirectButton>
        </CharacteristicsPetContainer>
      </PetInfoContent>
    </PetInfoContainer>
  );
}
