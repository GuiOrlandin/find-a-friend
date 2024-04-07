import { useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";

import {
  BackgroundLogo,
  CloseButton,
  FormAndOrgInfoContainer,
  FormPetRegisterContainer,
  ImageNameContainer,
  LogoutButton,
  OrgInformationContainer,
  OrgNameAndAddressContainer,
  PetRegisterContainer,
  SelectContainer,
  TitleAndBorderBottom,
  UploadImageAndTitleContainer,
  UploadImageAndTitleContainerOnHover,
  UploadImageContainer,
} from "../../styles/pages/petRegister/styles";

import littleLogoFace from "../../assets/littleLogoFace.svg";

import InputFormatted from "../login/components/inputFormatted";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { tokenStore } from "../../store/tokenStore";

import { IoCloudUploadOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";
import { FaRegWindowClose } from "react-icons/fa";

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
  const [images, setImages] = useState<File[]>();

  const navigate = useNavigate();
  const storeToken = localStorage.getItem("storeToken");

  const token = tokenStore((state) => state.token);

  function onDrop(image: File[]) {
    setImages((prevImages) => [...(prevImages || []), ...(image || [])]);
  }

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  const age = [{ title: "Filhote" }, { title: "Adulto" }];
  const energyLevel = [{ title: "01" }, { title: "02" }, { title: "03" }];
  const size = [{ title: "Pequeno" }, { title: "Médio" }, { title: "Grande" }];
  const independence = [
    { title: "Baixo" },
    { title: "Médio" },
    { title: "Alto" },
  ];

  const animalType = [
    { title: "Gato" },
    { title: "Cachorro" },
    { title: "Gato e Cachorro" },
  ];

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

  useEffect(() => {
    console.log(images);
  }, []);

  function handleChangePetDetailsForRegister(
    value: string,
    inputTitle: string
  ) {
    setPetRegisterDetails({
      ...petRegisterDetails!,
      [inputTitle]: value,
    });
  }
  function handleRemoveImage(ImageName: string) {
    const imageFiltered = images?.filter((image) => image.name !== ImageName);

    setImages(imageFiltered);
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
          <SelectContainer>
            <span>Idade</span>
            <select>
              {age.map((age) => (
                <option key={age.title}>{age.title}</option>
              ))}
            </select>
          </SelectContainer>
          <SelectContainer>
            <span>Porte</span>
            <select>
              {size.map((size) => (
                <option key={size.title}>{size.title}</option>
              ))}
            </select>
          </SelectContainer>
          <SelectContainer>
            <span>Nível de energia</span>
            <select>
              {energyLevel.map((energyLevel) => (
                <option key={energyLevel.title}>{energyLevel.title}</option>
              ))}
            </select>
          </SelectContainer>
          <SelectContainer>
            <span>Nível de independência</span>
            <select>
              {independence.map((independence) => (
                <option key={independence.title}>{independence.title}</option>
              ))}
            </select>
          </SelectContainer>
          <SelectContainer>
            <span>Ambiente</span>
            <select>
              {size.map((size) => (
                <option key={size.title}>{size.title}</option>
              ))}
            </select>
          </SelectContainer>
          <SelectContainer>
            <span>Tipo do Animal</span>
            <select>
              {animalType.map((animalType) => (
                <option key={animalType.title}>{animalType.title}</option>
              ))}
            </select>
          </SelectContainer>

          <UploadImageAndTitleContainer>
            <span>Fotos</span>
            {dropzone.isDragActive ? (
              <UploadImageAndTitleContainerOnHover {...dropzone.getRootProps()}>
                <label>
                  <IoCloudUploadOutline height={24} />
                  <p>Arraste e solte o arquivo</p>
                </label>
                <input type="" {...dropzone.getInputProps()} />
              </UploadImageAndTitleContainerOnHover>
            ) : (
              <UploadImageContainer {...dropzone.getRootProps()}>
                <label>
                  <IoCloudUploadOutline height={24} />
                  <p>Arraste e solte o arquivo</p>
                </label>
                <input type="" {...dropzone.getInputProps()} />
              </UploadImageContainer>
            )}
          </UploadImageAndTitleContainer>
          {images?.map((image) => (
            <ImageNameContainer>
              <CiImageOn />
              {image?.name}
              <CloseButton onClick={() => handleRemoveImage(image.name)}>
                <FaRegWindowClose color="#E44449" />
              </CloseButton>
            </ImageNameContainer>
          ))}
        </FormPetRegisterContainer>
      </FormAndOrgInfoContainer>
    </PetRegisterContainer>
  );
}
