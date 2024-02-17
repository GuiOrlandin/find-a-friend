import { FilterContainer, SelectAgeContainer } from "./styles";

interface filterContentProps {
  title: string;
}

interface Props {
  filterName: string;
  filterContent: filterContentProps[];
}

export default function FilterCharacteristicsSelect({
  filterName,
  filterContent,
}: Props) {
  return (
    <FilterContainer>
      <h2>{filterName}</h2>
      <SelectAgeContainer>
        {filterContent.map((content) => (
          <option key={content.title}>{content.title}</option>
        ))}
      </SelectAgeContainer>
    </FilterContainer>
  );
}
