import styled from "styled-components";

export const FilterContainer = styled.div`
  h2 {
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
    font-weight: 500;
    color: #ffffff;
  }
`;

export const SelectAgeContainer = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18.5rem;
  height: 4.5rem;
  border: none;
  background: #f75f64;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 700;

  border-radius: 20px;
  padding: 1.125rem;
  margin-bottom: 1.875rem;

  border: none;

  &:focus {
    outline: none;
  }

  option {
    color: #ffffff;
    background: #f15156;
    border: none;
    width: 18.5rem;
    font-size: 1rem;
  }
`;
