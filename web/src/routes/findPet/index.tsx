import { useEffect, useState } from "react";

import { Pet, findPetStore } from "../../store/findPetStore";

import SelectStateCityAndSearchButton from "../home/components/SelectStateCityAndSearchButtons";
import FilterCharacteristicsSelect from "./components/filterCharacteristicsSelect";

import littleLogoFace from "../../assets/littleLogoFace.svg";
import logoFaceIcon from "../../assets/findFriendFaceLogo.svg";

import {
  AnimalsDontFound,
  BackgroundLogo,
  FilterContainer,
  FiltersPetContainer,
  FindPetContainer,
  NumberOfPetsFoundAndCatOrDogFilterContainer,
  PetCardContainer,
  PetCardPetImageContainer,
  PetListAndNumberOfPetsFoundContainer,
  PetListContainer,
  SelectStateCityAndSearchButtonContainer,
  SkeletonImage,
} from "../../styles/pages/findPet/styles";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

export interface Characteristics {
  animalSize: string;
  energyLevel: string;
  city?: string;
  age: string;
  levelOfIndependence: string;
}

export default function FindPet() {
  const pet = findPetStore((state) => state.pet);
  const [petList, setPetList] = useState<Pet[]>([]);
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [characteristicsForSearch, setCharacteristicsForSearch] =
    useState<Characteristics>({
      animalSize: "PEQUENO",
      age: "FILHOTE",
      energyLevel: "01",
      levelOfIndependence: "BAIXO",
    });

  function handleFilterPetType(petType: string) {
    if (petType === "Gato e Cachorro") {
      return setPetList(pet);
    }

    const filteredPets = pet.filter((pet) => pet.animalType === petType);
    if (filteredPets.length === 0) {
      setIsEmpty(true);
    }
    setPetList(filteredPets);
  }
  function handleNavigate(petId: string) {
    navigate(`/petInfo/${petId}`);
  }

  function handleCharacteristicSelect(characteristic: string, value: string) {
    setCharacteristicsForSearch({
      ...characteristicsForSearch!,
      [characteristic]: value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase(),
    });
  }

  function handleSearchPetsWithCharacteristics() {
    setPetList(pet);
  }

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

  useEffect(() => {
    if (petList.length === 0 && isEmpty === false) {
      setPetList(pet);
    }

    if (petList.length > 0) {
      setIsEmpty(false);
    }
    if (petList.length === 0) {
      setIsEmpty(true);
    }
  }, [petList]);

  return (
    <FindPetContainer>
      <FiltersPetContainer>
        <SelectStateCityAndSearchButtonContainer>
          <div onClick={() => navigate("/")}>
            <img src={logoFaceIcon} alt="" />
          </div>

          <SelectStateCityAndSearchButton
            variant="findPetPage"
            characteristicsForSearch={characteristicsForSearch}
            clickAction={() => handleSearchPetsWithCharacteristics()}
          />
        </SelectStateCityAndSearchButtonContainer>
        <FilterContainer>
          <h1>Filtros</h1>

          <FilterCharacteristicsSelect
            filterName="Idade"
            filterContent={age}
            onCharacteristicSelect={(value) =>
              handleCharacteristicSelect("age", value)
            }
          />
          <FilterCharacteristicsSelect
            filterName="Nível de Energia"
            filterContent={energyLevel}
            onCharacteristicSelect={(value) =>
              handleCharacteristicSelect("energyLevel", value)
            }
          />
          <FilterCharacteristicsSelect
            filterName="Porte do animal"
            filterContent={size}
            onCharacteristicSelect={(value) =>
              handleCharacteristicSelect("animalSize", value)
            }
          />
          <FilterCharacteristicsSelect
            filterName="Nível de independência"
            filterContent={independence}
            onCharacteristicSelect={(value) =>
              handleCharacteristicSelect("levelOfIndependence", value)
            }
          />
        </FilterContainer>
      </FiltersPetContainer>
      <PetListAndNumberOfPetsFoundContainer>
        <NumberOfPetsFoundAndCatOrDogFilterContainer>
          <h1>
            {petList.length > 1 ? `Foram encotrados` : `Foi encontrado `}
            <span>
              {petList.length > 1
                ? ` ${petList.length} amigos `
                : ` ${petList.length} amigo`}
            </span>{" "}
            na sua cidade
          </h1>

          <select
            defaultValue={"Gato e Cachorro"}
            onChange={(animalType) =>
              handleFilterPetType(animalType.target.value)
            }
          >
            {animalType.map((animal) => (
              <option value={animal.title} key={animal.title}>
                {animal.title}
              </option>
            ))}
          </select>
        </NumberOfPetsFoundAndCatOrDogFilterContainer>

        <PetListContainer>
          {isEmpty ? (
            <AnimalsDontFound>
              Não foram encontrados Animais com estas características ou esta
              cidade não possui animais cadastrados.
            </AnimalsDontFound>
          ) : (
            petList!.map((pet) => {
              return (
                <PetCardContainer
                  key={pet.id}
                  onClick={() => handleNavigate(pet.id)}
                >
                  {`http://localhost:3333/files/${pet.petImage[0].path}` ===
                  undefined ? (
                    <div>
                      <SkeletonImage
                        width={17.125 * 16}
                        height={8.4375 * 16}
                        variant="rectangular"
                      />
                    </div>
                  ) : (
                    <>
                      <PetCardPetImageContainer>
                        <img
                          src={`http://localhost:3333/files/${pet.petImage[0].path}`}
                          alt=""
                        />
                      </PetCardPetImageContainer>

                      <p>{pet.name}</p>
                    </>
                  )}
                  <BackgroundLogo variant={pet.animalType}>
                    <img src={littleLogoFace} alt="" />
                  </BackgroundLogo>
                </PetCardContainer>
              );
            })
          )}
        </PetListContainer>
      </PetListAndNumberOfPetsFoundContainer>
    </FindPetContainer>
  );
}
