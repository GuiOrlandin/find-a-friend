import logoFaceIcon from "../../assets/findFriendFaceLogo.svg";
import {
  FilterContainer,
  FindPetContainer,
  SelectStateCityAndSearchButtonContainer,
} from "../../styles/pages/findPet/styles";
import SelectStateCityAndSearchButton from "../home/components/SelectStateCityAndSearchButtons";
import FilterCharacteristicsSelect from "./components/filterCharacteristicsSelect";

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
          <h2>Filtros</h2>

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
    </FindPetContainer>
  );
}
