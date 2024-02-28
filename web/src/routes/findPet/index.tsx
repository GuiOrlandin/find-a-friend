import SelectStateCityAndSearchButton from "../home/components/SelectStateCityAndSearchButtons";
import FilterCharacteristicsSelect from "./components/filterCharacteristicsSelect";
import {
  BackgroundLogo,
  FilterContainer,
  FindPetContainer,
  NumberOfPetsFoundAndCatOrDogFilterContainer,
  PetCardContainer,
  PetListAndNumberOfPetsFoundContainer,
  PetListContainer,
  SelectStateCityAndSearchButtonContainer,
} from "../../styles/pages/findPet/styles";
import logoFaceIcon from "../../assets/findFriendFaceLogo.svg";
import dogImage from "../../assets/dogImage.svg";
import littleLogoFace from "../../assets/littleLogoFace.svg";
import { Pet, findPetStore } from "../../store/findPetStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface Props {
  variant: string;
}

export default function FindPet({ variant }: Props) {
  const pet = findPetStore((state) => state.pet);
  const [petList, setPetList] = useState<Pet[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const refreshPetList = findPetStore((state) => state.refreshPetList);


  function handleFilterPetType(petType: string) {
    if (petType === "Gato e Cachorro") {
      return setPetList(pet);
    }

    const filteredPets = pet.filter((pet) => pet.animalType === petType);
    setPetList(filteredPets);
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
    if (!petList) {
      setPetList(pet);
    }

    if (petList) {
      setIsLoading(false);
    }
  }, [pet, petList]);

  return (
    <FindPetContainer>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <div>
            <SelectStateCityAndSearchButtonContainer>
              <div>
                <img src={logoFaceIcon} alt="" />
              </div>

              <SelectStateCityAndSearchButton variant="findPetPage" />
            </SelectStateCityAndSearchButtonContainer>
            <FilterContainer>
              <h1>Filtros</h1>

              <FilterCharacteristicsSelect
                filterName="Idade"
                filterContent={age}
              />
              <FilterCharacteristicsSelect
                filterName="Nível de Energia"
                filterContent={energyLevel}
              />
              <FilterCharacteristicsSelect
                filterName="Porte do animal"
                filterContent={size}
              />
              <FilterCharacteristicsSelect
                filterName="Nível de independência"
                filterContent={independence}
              />
            </FilterContainer>
          </div>
          <PetListAndNumberOfPetsFoundContainer>
            <NumberOfPetsFoundAndCatOrDogFilterContainer>
              <h1>
                Encontre <span>324 amigos</span> na sua cidade
              </h1>

              <select
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
              {petList!.map((pet) => (
                <PetCardContainer key={pet.id}>
                  <img src={dogImage} alt="" />
                  <BackgroundLogo variant={pet.animalType}>
                    <img src={littleLogoFace} alt="" />
                  </BackgroundLogo>
                  <p>{pet.name}</p>
                </PetCardContainer>
              ))}
            </PetListContainer>
          </PetListAndNumberOfPetsFoundContainer>
        </>
      )}
    </FindPetContainer>
  );
}
