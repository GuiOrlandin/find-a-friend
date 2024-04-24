import {
  BackgroundLogo,
  BigPetImageContainer,
  CharacteristicsPetContainer,
  EnergyEnvironmentAndSizePetInfo,
  EnergyPetInfo,
  EnergySvgContainer,
  EnvironmentPetInfo,
  LittlePetImage,
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

import axios from "axios";

import littleLogoFace from "../../assets/littleLogoFace.svg";

import { OrgResponse } from "../petRegister";

import { Skeleton } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

import { SlEnergy } from "react-icons/sl";
import { FiMaximize } from "react-icons/fi";
import { IoEllipse } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Pet } from "../../store/findPetStore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function PetInfo() {
  const [petInfo, setPetInfo] = useState<Pet>();
  const [selectImage, setSelectImage] = useState<string>();
  const [orgId, setOrgId] = useState("");
  let { petId } = useParams();
  const storagePet = localStorage.getItem("storagePet");
  const storageOrgId = localStorage.getItem("storageOrgId");

  function handleSelectImage(imageName: string) {
    setSelectImage(`http://localhost:3333/files/${imageName}`);
  }

  const { data: orgInfo, refetch } = useQuery<OrgResponse>({
    queryKey: ["org-info"],

    queryFn: async () => {
      if (orgId) {
        return axios
          .get(`http://localhost:3333/orgInfo?id=${orgId}`)
          .then((response) => response.data);
      }
    },
  });
  const { data: petSelected, refetch: refetchPetSelected } = useQuery<Pet>({
    queryKey: ["pet-selected"],

    queryFn: async () => {
      if (orgId) {
        return axios
          .get(`http://localhost:3333/pets/available?id=${petId}`)
          .then((response) => response.data);
      }
    },
  });

  useEffect(() => {
    if (!petSelected) {
      refetchPetSelected();
    }

    if (petSelected) {
      setPetInfo(petSelected);
      setOrgId(petSelected.org_id);
      localStorage.setItem("storagePet", JSON.stringify(petSelected));
      localStorage.setItem("storageOrgId", JSON.stringify(petSelected.org_id));

      refetch();
    }

    if (petInfo === undefined && storagePet!?.length > 0) {
      const parsedStoragePet = JSON.parse(storagePet!);
      const firstPet: Pet = parsedStoragePet[0];
      let orgIdWithoutQuotes = storageOrgId!.replace(/"/g, "");

      setPetInfo(firstPet);
      setOrgId(orgIdWithoutQuotes!);
    }

    if (selectImage === undefined && petInfo) {
      setSelectImage(
        `http://localhost:3333/files/${petInfo?.petImage[0].path}`
      );
    }
  }, [selectImage, orgId, orgInfo, petSelected]);

  return (
    <>
      <PetInfoContainer>
        <SideBar redirectSite="findPet" />
        <PetInfoContent>
          <BigPetImageContainer>
            <img
              src={
                selectImage
                  ? selectImage
                  : `http://localhost:3333/files/${petInfo?.petImage[0].path}`
              }
              alt=""
            />
          </BigPetImageContainer>

          <LittlePetImageContainer>
            {petInfo?.petImage.map((image) => (
              <LittlePetImage
                key={uuidv4()}
                onClick={() => handleSelectImage(image.path)}
                src={`http://localhost:3333/files/${image.path}`}
                variant={
                  selectImage === `http://localhost:3333/files/${image.path}`
                    ? "active"
                    : ""
                }
              />
            ))}
          </LittlePetImageContainer>
          <CharacteristicsPetContainer>
            <h1>{petInfo?.name}</h1>
            <p>{petInfo?.description}</p>
            <EnergyEnvironmentAndSizePetInfo>
              <EnergyPetInfo>
                {petInfo?.energyLevel === "01" && (
                  <>
                    <EnergySvgContainer>
                      <SlEnergy color="#0D3B66" size={20} />
                      <SlEnergy color="#d3e2e5" size={20} />
                      <SlEnergy color="#d3e2e5" size={20} />
                      <SlEnergy color="#d3e2e5" size={20} />
                      <SlEnergy color="#d3e2e5" size={20} />
                    </EnergySvgContainer>
                    <p>Pouco Energético</p>
                  </>
                )}
                {petInfo?.energyLevel === "02" && (
                  <>
                    <EnergySvgContainer>
                      <SlEnergy color="#0D3B66" size={20} />
                      <SlEnergy color="#0D3B66" size={20} />
                      <SlEnergy color="#0D3B66" size={20} />
                      <SlEnergy color="#d3e2e5" size={20} />
                      <SlEnergy color="#d3e2e5" size={20} />
                    </EnergySvgContainer>
                    <p>Energia moderada</p>
                  </>
                )}

                {petInfo?.energyLevel === "03" && (
                  <>
                    <EnergySvgContainer>
                      <SlEnergy color="#0D3B66" size={20} />
                      <SlEnergy color="#0D3B66" size={20} />
                      <SlEnergy color="#0D3B66" size={20} />
                      <SlEnergy color="#0D3B66" size={20} />
                      <SlEnergy color="#0D3B66" size={20} />
                    </EnergySvgContainer>
                    <p>Muita energia</p>
                  </>
                )}
              </EnergyPetInfo>
              <EnvironmentPetInfo>
                <FiMaximize size={20} />
                <p>
                  {petInfo?.enviroment &&
                    petInfo.enviroment.charAt(0).toUpperCase() +
                      petInfo.enviroment.slice(1).toLowerCase()}
                </p>
              </EnvironmentPetInfo>
              <SizePetInfo>
                {petInfo?.animalSize === "PEQUENO" && (
                  <>
                    <div>
                      <IoEllipse color="#0D3B66" size={20} />
                      <IoEllipse color="#d3e2e5" size={20} />
                      <IoEllipse color="#d3e2e5" size={20} />
                    </div>
                    <p>Pequenino</p>
                  </>
                )}

                {petInfo?.animalSize === "MEDIO" && (
                  <>
                    <div>
                      <IoEllipse color="#0D3B66" size={20} />
                      <IoEllipse color="#0D3B66" size={20} />
                      <IoEllipse color="#d3e2e5" size={20} />
                    </div>
                    <p>Médio</p>
                  </>
                )}

                {petInfo?.animalSize === "GRANDE" && (
                  <>
                    <div>
                      <IoEllipse color="#0D3B66" size={20} />
                      <IoEllipse color="#0D3B66" size={20} />
                      <IoEllipse color="#d3e2e5" size={20} />
                    </div>
                    <p>Grande</p>
                  </>
                )}
              </SizePetInfo>
            </EnergyEnvironmentAndSizePetInfo>
            <OrgInfoContainer>
              <OrgImageNameAndAddressContainer>
                <BackgroundLogo>
                  <img src={littleLogoFace} alt="" />
                </BackgroundLogo>
                <OrgNameAndAddressContainer>
                  <h1>{orgInfo?.name}</h1>
                  <p>
                    {orgInfo?.adress}, {orgInfo?.city}, {orgInfo?.state}
                  </p>
                </OrgNameAndAddressContainer>
              </OrgImageNameAndAddressContainer>
              <PhoneNumberContainer>
                <IoLogoWhatsapp size={24} color="#0D3B66" />
                {orgInfo?.phone}
              </PhoneNumberContainer>
            </OrgInfoContainer>
            <PetRequirements>
              <h1>Requesitos para adoção</h1>
              <PetRequirementsContent>
                {petInfo?.requirement.map((requirement) => (
                  <>
                    <IoAlertCircleOutline
                      key={uuidv4()}
                      size={24}
                      color="#F15156"
                    />
                    {requirement}
                  </>
                ))}
              </PetRequirementsContent>
            </PetRequirements>
            <WhatsAppRedirectButton
              onClick={() =>
                (window.location.href = `https://api.whatsapp.com/send?1=pt_BR&phone=550${orgInfo?.phone.replace(
                  /\s+/g,
                  ""
                )}`)
              }
            >
              <FaWhatsapp size={20} />
              Entrar em contato
            </WhatsAppRedirectButton>
          </CharacteristicsPetContainer>
        </PetInfoContent>
      </PetInfoContainer>
    </>
  );
}
