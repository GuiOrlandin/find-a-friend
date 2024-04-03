import styled from "styled-components";

export const RegisterOrgContainer = styled.div`
  display: flex;
  padding: 4.9375rem 0 11.0625rem 0;
  justify-content: center;

  h1 {
    color: #0d3b66;
    margin-top: 2.5rem;
    margin-bottom: 4rem;
    font-size: 3.375rem;
    text-align: center;
    margin-right: 4rem;
  }
`;

export const InputsContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;

  div {
    margin-top: 1rem;
  }

  button {
    position: absolute;
    left: 27rem;
  }
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8.5rem;
`;

export const AlreadyRegistered = styled.a`
  border: none;
  background: none;
  position: absolute;
  top: 5rem;
  width: 9.29rem;
  color: #0d3b66;
  font-weight: 900;
  border-bottom: 1px solid #0d3b66;
  margin-left: 11rem;

  &:hover {
    cursor: pointer;
  }
`;

export const RegisterAndAlreadyRegisteredButtonContainer = styled.a`
  display: flex;
  position: relative;
  margin-top: 0.25rem;
  flex-direction: column;
`;
export const ErrorMessage = styled.a`
  display: flex;
  color: red;
  position: absolute;
  margin-top: 0.5rem;
`;
