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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.5rem;
  height: 4.5rem;
  background: #e44449;
  border-radius: 20px;
  margin-left: 0.625rem;

  select {
    position: fixed;
    display: inline-block;
    max-width: 250px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #ffffff;
    font-size: 1.25rem;
    background: none;
    width: 17.5rem;
    border-radius: 20px;

    border: none;
    padding: 1.7rem 1rem 1.4rem 1.1875rem;

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
