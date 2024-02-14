import {
  SearchButton,
  SelectCityContainer,
  SelectStateContainer,
} from "./styles";
import arrowDown from "../../../../assets/arrowDown.svg";
import searchIcon from "../../../../assets/searchIcon.svg";

export default function SelectStateAndCity() {
  return (
    <>
      <SelectStateContainer>
        <option>SP</option>
        <option>PR</option>
      </SelectStateContainer>
      <SelectCityContainer>
        <select>
          <option>Recife</option>
          <option>Recife</option>
          <option>Recife</option>
        </select>
        <img src={arrowDown} alt="" />
      </SelectCityContainer>

      <SearchButton>
        <img src={searchIcon} alt="" />
      </SearchButton>
    </>
  );
}
