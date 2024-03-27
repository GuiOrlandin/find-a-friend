import styled from "styled-components";

interface SelectAnimalType {
  variant: string;
}

export const FindPetContainer = styled.div`
  display: flex;
  background: #f15156;
  height: 100vh;
`;

export const SelectStateCityAndSearchButtonContainer = styled.div`
  height: 15.0625rem;
  width: 24.5rem;
  padding: 5.0625rem 2.5rem 1.6875rem 3.5rem;

  background: #e44449;

  div {
    margin-bottom: 1.625rem;
  }
`;

export const FilterContainer = styled.div`
  margin: 3.5rem 0 2.1875rem 3.5rem;

  h1 {
    color: #ffffff;
    font-size: 1.25rem;
    margin-bottom: 1.6875rem;
  }
`;

export const PetListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 3.3125rem 0 0 2rem;
  gap: 2rem;
`;

export const PetCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  width: 17.5rem;
  height: 13.0625rem;
  border-radius: 20px;

  &:hover {
    background: #0d3b66;

    p {
      color: #ffffff;
    }
  }

  img {
    padding: 0.175rem;
  }

  p {
    margin-top: 1.6rem;
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const BackgroundLogo = styled.div<SelectAnimalType>`
  position: absolute;

  left: 120px;
  bottom: 25px;

  background: ${({ variant }) => (variant === "Gato" ? "#f4d35e" : "#F15156")};
  padding: 0.72rem;
  border-radius: 10px;
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 1.375rem;
`;

export const PetListAndNumberOfPetsFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: #fdeced;
  color: #0d3b66;
  padding-right: 7rem;

  span {
    font-size: 1.25rem;
    font-weight: 800;
  }
`;

export const AnimalsDontFound = styled.div`
  display: flex;
  margin: 17rem 23rem;
  text-align: center;

  font-weight: 900;
`;

export const NumberOfPetsFoundAndCatOrDogFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9.625rem;
  margin-left: 2rem;

  h1 {
    font-size: 1.25rem;
  }

  select {
    width: 13.125rem;
    height: 3rem;
    border-radius: 15px;
    color: #0d3b66;

    background: #fbe1e2;
    border: none;
    padding-left: 1.125rem;
  }
`;
