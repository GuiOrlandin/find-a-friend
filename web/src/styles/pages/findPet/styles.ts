import styled from "styled-components";

export const FindPetContainer = styled.div`
  display: flex;
  background: #f15156;
  height: 100%;
  width: 100%;
`;

export const SelectStateCityAndSearchButtonContainer = styled.div`
  height: 15.0625rem;
  width: 24.5rem;
  padding: 5.0625rem 2.5rem 1.6875rem 3.5rem;

  background: #e44449;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin: 3.3125rem 0 0 2rem;
  gap: 1rem;
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

  div {
    position: absolute;

    left: 120px;
    bottom: 25px;
    background: #f4d35e;
    padding: 0.72rem;
    border-radius: 10px;
    width: 2.75rem;
    height: 2.75rem;
    margin-bottom: 1.375rem;
  }

  p {
    margin-top: 1.6rem;
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const PetListAndNumberOfPetsFound = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fdeced;
  color: #0d3b66;
  padding-right: 7rem;

  h1 {
    font-size: 1.25rem;
    margin-top: 9.625rem;
    margin-left: 2rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 800;
  }
`;
