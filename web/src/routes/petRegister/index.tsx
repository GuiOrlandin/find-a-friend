import { useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";

import { useParams } from "react-router-dom";

import {
  AddRequirement,
  AnimalRequirementContainer,
  BackgroundLogo,
  CloseButton,
  FormAndOrgInfoContainer,
  FormPetRegisterContainer,
  ImageNameUploadedContainer,
  LogoutButton,
  OrgInformationContainer,
  OrgNameAndAddressContainer,
  PetRegisterContainer,
  PetRegisteredSuccessful,
  RegisterPetButton,
  RequirementUploadedContainer,
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
import { FaPlus } from "react-icons/fa6";

import { v4 as uuidv4 } from "uuid";
import { usePetRegisterMutate } from "../../hooks/petRegisterMutate";
import { useUploadImageMutate } from "../../hooks/uploadImageMutate";
import SideBar from "./components/sideBar";

export interface petRegisterDetails {
  name: string;
  city: string;
  description: string;
  age: string;
  energyLevel: string;
  animalSize: string;
  animalType: string;
  levelOfIndependence: string;
  enviroment: string;
  petImage: File[];
  requirement: string[];
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
    useState<petRegisterDetails>({
      name: "",
      city: "",
      description: "",
      age: "FILHOTE",
      energyLevel: "01",
      animalSize: "PEQUENO",
      animalType: "Gato",
      levelOfIndependence: "BAIXO",
      enviroment: "PEQUENO",
      petImage: [],
      requirement: [],
    });
  const [tokenActive, setTokenActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [requirements, setRequirements] = useState<string[]>([]);
  const [inputRequirementsValue, setInputRequirementsValue] = useState("");
  const { mutate, isSuccess } = usePetRegisterMutate();
  const { mutate: upload } = useUploadImageMutate();
  const { email } = useParams();

  const navigate = useNavigate();
  const storeToken = localStorage.getItem("storeToken");
  const storedEmail = localStorage.getItem("storedEmail");

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

  const animalType = [{ title: "Gato" }, { title: "Cachorro" }];

  const {
    data: orgInfo,
    refetch,
    error,
  } = useQuery<OrgResponse>({
    queryKey: ["org-info"],
    queryFn: async () => {
      return axios
        .get(`http://localhost:3333/orgInfo?email=${storedEmail}`)
        .then((response) => response.data);
    },
  });

  function handleChangePetDetailsForRegister(
    value: string | string[],
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
    const index = requirements.indexOf(fileUploaded);

    if (index !== -1) {
      const textFiltered = [
        ...requirements.slice(0, index),
        ...requirements.slice(index! + 1),
      ];

      setRequirements(textFiltered);
    }
  }

  function onDrop(image: File[]) {
    setImages((prevImages) => [...prevImages, ...image]);
  }

  function handleLogout() {
    localStorage.removeItem("storeToken");
    localStorage.removeItem("storedEmail");
    removeToken();
    setTokenActive(false);
  }

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  function handlePetRegister() {
    if (petRegisterDetails) {
      mutate(petRegisterDetails);
      upload(images);
    }
  }

  useEffect(() => {
    if (token && email) {
      localStorage.setItem("storeToken", token);
      localStorage.setItem("storedEmail", email);
    }

    if (!token && !storeToken && tokenActive === false) {
      navigate("/login");
    }

    if (error?.message === "Request failed with status code 401") {
      localStorage.removeItem("storeToken");
      localStorage.removeItem("storedEmail");
      navigate("/login");
    }
  }, [token, storeToken, tokenActive, error]);

  useEffect(() => {
    if (email) {
      refetch();
    }
    if (email === null) {
      navigate("/login");
    }

    if (orgInfo !== undefined) {
      setIsLoading(false);
    }
  }, [email]);

  useEffect(() => {
    if (orgInfo === undefined) {
      refetch();
    }
  }, [orgInfo]);

  useEffect(() => {
    if (orgInfo !== undefined) {
      setPetRegisterDetails({
        ...petRegisterDetails!,
        city: orgInfo.city,
        requirement: requirements,
        petImage: images,
      });
    }
  }, [requirements, images]);

  return (
    <>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <PetRegisterContainer>
          <SideBar />
          <FormAndOrgInfoContainer>
            <OrgInformationContainer>
              <BackgroundLogo>
                <img src={littleLogoFace} alt="" width={27} />
              </BackgroundLogo>
              {orgInfo !== undefined && (
                <OrgNameAndAddressContainer>
                  <h1>{orgInfo?.name}</h1>
                  <span>
                    {orgInfo?.adress}, {orgInfo?.city}, {orgInfo?.state}
                  </span>
                </OrgNameAndAddressContainer>
              )}

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
                  handleChangePetDetailsForRegister(value, "name")
                }
                inputActive="text"
              />

              <InputFormatted
                inputTitle="Sobre"
                pageWithTheComponent="petRegister"
                handleChangeAccountDetails={(value) =>
                  handleChangePetDetailsForRegister(value, "description")
                }
                inputActive="about"
              />
              <SelectContainer>
                <span>Idade</span>
                <select
                  onChange={(age) =>
                    handleChangePetDetailsForRegister(
                      age.target.value.toUpperCase(),
                      "age"
                    )
                  }
                >
                  {age.map((age) => (
                    <option key={age.title}>{age.title}</option>
                  ))}
                </select>
              </SelectContainer>
              <SelectContainer>
                <span>Porte</span>
                <select
                  onChange={(animalSize) =>
                    handleChangePetDetailsForRegister(
                      animalSize.target.value
                        .normalize("NFD")
                        .replace(/[^a-zA-Z\s]/g, "")
                        .toUpperCase(),
                      "animalSize"
                    )
                  }
                >
                  {size.map((size) => (
                    <option key={size.title}>{size.title}</option>
                  ))}
                </select>
              </SelectContainer>
              <SelectContainer>
                <span>Nível de energia</span>
                <select
                  onChange={(energyLevel) =>
                    handleChangePetDetailsForRegister(
                      energyLevel.target.value.toUpperCase(),
                      "energyLevel"
                    )
                  }
                >
                  {energyLevel.map((energyLevel) => (
                    <option key={energyLevel.title}>{energyLevel.title}</option>
                  ))}
                </select>
              </SelectContainer>
              <SelectContainer>
                <span>Nível de independência</span>
                <select
                  onChange={(levelOfIndependence) =>
                    handleChangePetDetailsForRegister(
                      levelOfIndependence.target.value
                        .normalize("NFD")
                        .replace(/[^a-zA-Z\s]/g, "")
                        .toUpperCase(),
                      "levelOfIndependence"
                    )
                  }
                >
                  {independence.map((independence) => (
                    <option key={independence.title}>
                      {independence.title}
                    </option>
                  ))}
                </select>
              </SelectContainer>
              <SelectContainer>
                <span>Ambiente</span>
                <select
                  onChange={(enviroment) =>
                    handleChangePetDetailsForRegister(
                      enviroment.target.value
                        .normalize("NFD")
                        .replace(/[^a-zA-Z\s]/g, "")
                        .toUpperCase(),
                      "enviroment"
                    )
                  }
                >
                  {size.map((size) => (
                    <option key={size.title}>{size.title}</option>
                  ))}
                </select>
              </SelectContainer>
              <SelectContainer>
                <span>Tipo do Animal</span>
                <select
                  onChange={(animalType) =>
                    handleChangePetDetailsForRegister(
                      animalType.target.value,
                      "animalType"
                    )
                  }
                >
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
                <ImageNameUploadedContainer key={image.name}>
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
                  handleChangeAccountDetails={(value) => {
                    setInputRequirementsValue(value);
                  }}
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
                    setRequirements((prevValue) => [
                      ...prevValue,
                      inputRequirementsValue,
                    ])
                  }
                >
                  <FaPlus color="#E44449" />
                </AddRequirement>
              </AnimalRequirementContainer>

              <div>
                <RegisterPetButton onClick={() => handlePetRegister()}>
                  Confirmar
                </RegisterPetButton>
                {isSuccess && (
                  <PetRegisteredSuccessful>
                    Pet Cadastrado!
                  </PetRegisteredSuccessful>
                )}
              </div>
            </FormPetRegisterContainer>
          </FormAndOrgInfoContainer>
        </PetRegisterContainer>
      )}
    </>
  );
}
