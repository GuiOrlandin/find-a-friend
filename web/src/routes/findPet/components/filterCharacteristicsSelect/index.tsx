import { FilterContainer, SelectAgeContainer } from "./styles";

interface filterContentProps {
  title: string;
}

interface Props {
  filterName: string;
  filterContent: filterContentProps[];
  onCharacteristicSelect: (value: string) => void;
}

export default function FilterCharacteristicsSelect({
  filterName,
  filterContent,
  onCharacteristicSelect,
}: Props) {
  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = event.target.value;
    onCharacteristicSelect(selectedValue);
  }

  return (
    <FilterContainer>
      <h2>{filterName}</h2>
      <SelectAgeContainer onChange={handleSelectChange}>
        {filterContent.map((content) => (
          <option key={content.title}>{content.title}</option>
        ))}
      </SelectAgeContainer>
    </FilterContainer>
  );
}
