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
import { findPetStore } from "../../store/findPetStore";

interface Props {
  variant: string;
}

export default function FindPet({ variant }: Props) {
  const petList = findPetStore((state) => state.pet);

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

  return (
    <FindPetContainer>
      <div>
        <SelectStateCityAndSearchButtonContainer>
          <div>
            <img src={logoFaceIcon} alt="" />
          </div>

          <SelectStateCityAndSearchButton variant="findPetPage" />
        </SelectStateCityAndSearchButtonContainer>
        <FilterContainer>
          <h1>Filtros</h1>

          <FilterCharacteristicsSelect filterName="Idade" filterContent={age} />
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

          <select>
            {animalType.map((animal) => (
              <option key={animal.title}>{animal.title}</option>
            ))}
          </select>
        </NumberOfPetsFoundAndCatOrDogFilterContainer>

        <PetListContainer>
          <PetCardContainer>
            <img src={dogImage} alt="" />
            <BackgroundLogo variant="">
              <img src={littleLogoFace} alt="" />
            </BackgroundLogo>
            <p>Alfredo</p>
          </PetCardContainer>
        </PetListContainer>
      </PetListAndNumberOfPetsFoundContainer>
    </FindPetContainer>
  );
}
