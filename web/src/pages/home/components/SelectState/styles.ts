import styled from "styled-components";

export const SearchButton = styled.button`
  background: #f4d35e;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 20px;
  border: none;
  margin-left: 2rem;

  img {
    margin: 0;
  }
`;

export const SelectStateContainer = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  width: 4.5rem;
  height: 4.5rem;
  border: 1px solid #ffffff;
  background: none;
  border-radius: 20px;
  color: #ffffff;
  font-size: 1.25rem;

  &:focus {
    outline: none;
  }

  option {
    color: #ffffff;
    background: #f15156;
    border: none;
  }
`;

export const SelectCityContainer = styled.div`
  width: 17.5rem;
  height: 4.5rem;
  background: #e44449;
  border-radius: 20px;
  margin-left: 0.625rem;

  img {
    margin: 1rem 0 0 -7.5rem;
  }

  select {
    -webkit-appearance: none;
    color: #ffffff;
    font-size: 1.25rem;
    background: none;
    width: 17.5rem;
    border-radius: 20px;

    border: none;
    padding: 1.7rem 2rem 1.2rem 6.1875rem;

    &:focus {
      outline: none;
    }

    option {
      color: #ffffff;
      background: #f15156;
      border: none;
    }
  }
`;
