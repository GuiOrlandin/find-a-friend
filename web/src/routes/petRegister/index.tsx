import { useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";

import {
  AddRequirement,
  AnimalRequirementContainer,
  BackgroundLogo,
  ButtonBackPage,
  CloseButton,
  FormAndOrgInfoContainer,
  FormPetRegisterContainer,
  ImageNameUploadedContainer,
  LogoutButton,
  OrgInformationContainer,
  OrgNameAndAddressContainer,
  PetRegisterContainer,
  RequirementUploadedContainer,
  SelectContainer,
  SideBarContainer,
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
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";

import { v4 as uuidv4 } from "uuid";

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
  state: string;
}

export default function PetRegister() {
  const [petRegisterDetails, setPetRegisterDetails] =
    useState<petRegisterDetails>();
  const [tokenActive, setTokenActive] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [requirements, setRequirements] = useState<string[]>([]);

  const navigate = useNavigate();
  const storeToken = localStorage.getItem("storeToken");

  const token = tokenStore((state) => state.token);
  const removeToken = tokenStore((state) => state.removeToken);

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

  const {
    data: orgInfo,
    refetch,
    isLoading,
  } = useQuery<OrgResponse>({
    queryKey: ["org-info"],
    queryFn: async () => {
      const authToken = storeToken;
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      return axios
        .get(
          "http://localhost:3333/orgInfo?email=guizinmir24%40gmail.com",
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
  function handleRemoveUploadedFile(fileUploaded: File) {
    const index = images?.indexOf(fileUploaded);

    if (index !== 1) {
      const imageFiltered = [
        ...images.slice(0, index),
        ...images.slice(index + 1),
      ];
      setImages(imageFiltered);
    }
  }

  function handleRemoveUploadedText(fileUploaded: string) {
    const index = requirements?.indexOf(fileUploaded);

    if (index !== -1) {
      const textFiltered = [
        ...requirements.slice(0, index),
        ...requirements.slice(index + 1),
      ];
      setRequirements(textFiltered);
    }
  }

  function handleAddRequirement(requirement: string) {
    setRequirements((prevRequirement) => [...prevRequirement, requirement]);
  }

  function onDrop(image: File[]) {
    setImages((prevImages) => [...prevImages, ...image]);
  }

  function handleLogout() {
    localStorage.removeItem("storeToken");
    removeToken();
    setTokenActive(false);
  }

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem("storeToken", token);
      console.log(storeToken);
    }
    console.log(storeToken);

    if (!token && !storeToken && tokenActive === false) {
      navigate("/login");
    }
  }, [token, storeToken, tokenActive]);

  useEffect(() => {
    if (orgInfo === undefined) {
      refetch();
    }
  }, [orgInfo]);

  return (
    <>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <PetRegisterContainer>
          <SideBarContainer>
            <img src={littleLogoFace} alt="" width={27} />
            <ButtonBackPage onClick={() => navigate("/")}>
              <IoMdArrowRoundBack color="#0D3B66" />
            </ButtonBackPage>
          </SideBarContainer>
          <FormAndOrgInfoContainer>
            <OrgInformationContainer>
              <BackgroundLogo>
                <img src={littleLogoFace} alt="" width={27} />
              </BackgroundLogo>
              <OrgNameAndAddressContainer>
                <h1>{orgInfo?.name}</h1>
                <span>
                  {orgInfo?.adress}, {orgInfo?.city}, {orgInfo?.state}
                </span>
              </OrgNameAndAddressContainer>

              <LogoutButton onClick={() => handleLogout()}>
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
                    <option key={independence.title}>
                      {independence.title}
                    </option>
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
                  <UploadImageAndTitleContainerOnHover
                    {...dropzone.getRootProps()}
                  >
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
                <ImageNameUploadedContainer>
                  <CiImageOn />
                  {image?.name}
                  <CloseButton onClick={() => handleRemoveUploadedFile(image)}>
                    <FaRegWindowClose color="#E44449" />
                  </CloseButton>
                </ImageNameUploadedContainer>
              ))}
              <AnimalRequirementContainer>
                <TitleAndBorderBottom>
                  <h1>Requesitos para adoção</h1>
                </TitleAndBorderBottom>
                <InputFormatted
                  inputActive="text"
                  pageWithTheComponent="petRegister"
                  inputTitle="Requisito"
                  handleChangeAccountDetails={(value) =>
                    handleChangePetDetailsForRegister(value, "requirement")
                  }
                />
                {requirements.map((requirement) => (
                  <RequirementUploadedContainer key={`${uuidv4()}`}>
                    {requirement}
                    <CloseButton
                      onClick={() => handleRemoveUploadedText(requirement)}
                    >
                      <FaRegWindowClose color="#E44449" />
                    </CloseButton>
                  </RequirementUploadedContainer>
                ))}

                <AddRequirement
                  onClick={() =>
                    handleAddRequirement(petRegisterDetails!.requirement)
                  }
                >
                  <FaPlus color="#E44449" />
                </AddRequirement>
              </AnimalRequirementContainer>
            </FormPetRegisterContainer>
          </FormAndOrgInfoContainer>
        </PetRegisterContainer>
      )}
    </>
  );
}
