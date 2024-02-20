import SelectStateCityAndSearchButton from "../home/components/SelectStateCityAndSearchButtons";
import FilterCharacteristicsSelect from "./components/filterCharacteristicsSelect";

import {
  FilterContainer,
  FindPetContainer,
  PetCardContainer,
  PetListAndNumberOfPetsFound,
  PetListContainer,
  SelectStateCityAndSearchButtonContainer,
} from "../../styles/pages/findPet/styles";

import logoFaceIcon from "../../assets/findFriendFaceLogo.svg";
import dogImage from "../../assets/dogImage.svg";
import littleLogoFace from "../../assets/littleLogoFace.svg";

export default function FindPet() {
  const age = [{ title: "Filhote" }, { title: "Adulto" }];
  const energyLevel = [{ title: "01" }, { title: "02" }, { title: "03" }];
  const size = [{ title: "Pequeno" }, { title: "Médio" }, { title: "Grande" }];
  const independence = [
    { title: "Baixo" },
    { title: "Médio" },
    { title: "Alto" },
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
      <PetListAndNumberOfPetsFound>
        <h1>
          Encontre <span>324 amigos</span> na sua cidade
        </h1>

        <PetListContainer>
          <PetCardContainer>
            <img src={dogImage} alt="" />
            <div>
              <img src={littleLogoFace} alt="" />
            </div>
            <p>Alfredo</p>
          </PetCardContainer>
          <PetCardContainer>
            <img src={dogImage} alt="" />
            <div>
              <img src={littleLogoFace} alt="" />
            </div>
            <p>Alfredo</p>
          </PetCardContainer>
          <PetCardContainer>
            <img src={dogImage} alt="" />
            <div>
              <img src={littleLogoFace} alt="" />
            </div>
            <p>Alfredo</p>
          </PetCardContainer>
        </PetListContainer>
      </PetListAndNumberOfPetsFound>
    </FindPetContainer>
  );
}
