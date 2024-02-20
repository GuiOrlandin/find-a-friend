import styled from "styled-components";

interface SelectStateCityAndSearchButtonProps {
  variant: string;
}
export const Container = styled.div`
  display: flex;
`;

export const SelectStateContainer = styled.select<SelectStateCityAndSearchButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  border: 1px solid #ffffff;
  background: none;
  border-radius: 20px;
  color: #ffffff;

  width: ${({ variant }) =>
    variant === "findPetPage" ? "4.1875rem" : "4.5rem"};
  height: ${({ variant }) =>
    variant === "findPetPage" ? "3.75rem" : "4.5rem"};
  border: ${({ variant }) =>
    variant === "findPetPage" ? "solid 1px #F15156" : "solid px #FFFFFF"};

  font-size: ${({ variant }) =>
    variant === "findPetPage" ? "1rem" : "1.25rem"};

  &:focus {
    outline: none;
  }

  option {
    color: #ffffff;
    background: #f15156;
    border: none;
  }
`;

export const SelectCityContainer = styled.select<SelectStateCityAndSearchButtonProps>`
  display: flex;
  align-items: center;

  justify-content: center;

  display: inline-block;
  max-width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ffffff;
  font-size: 1.25rem;
  background: #e44449;
  border-radius: 20px;
  margin-left: 0.625rem;

  width: ${({ variant }) =>
    variant === "findPetPage" ? "9.0625rem" : "17.5rem"};

  border: ${({ variant }) =>
    variant === "findPetPage" ? "solid 1px #F15156" : "none"};
  padding: ${({ variant }) =>
    variant === "findPetPage" ? "1.1875rem" : "1.7rem 1rem 1.4rem 1.1875rem"};

  font-size: ${({ variant }) =>
    variant === "findPetPage" ? "1rem" : "1.25rem"};

  &:focus {
    outline: none;

    option {
      color: #ffffff;
      background: #f15156;
      border: none;
    }
  }
`;

export const SearchButton = styled.button<SelectStateCityAndSearchButtonProps>`
  background: #f4d35e;
  border-radius: 20px;
  border: none;

  width: ${({ variant }) => (variant === "findPetPage" ? "3.75rem" : "4.5rem")};
  margin-left: ${({ variant }) =>
    variant === "findPetPage" ? "0.75rem" : "2rem"};
  padding: ${({ variant }) =>
    variant === "findPetPage" ? "0.8rem" : "1.7rem 1rem 1.4rem 1.1875rem"};

  img {
    margin: 0;

    width: ${({ variant }) => (variant === "findPetPage" ? "1.375rem" : "")};
  }
`;
