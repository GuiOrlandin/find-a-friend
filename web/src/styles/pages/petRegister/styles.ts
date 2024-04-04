import styled from "styled-components";

export const PetRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrgInformationContainer = styled.div`
  display: flex;
  width: 44.25rem;
  height: 7.5625rem;
  background: #0d3b66;
  border-radius: 20px;
  align-items: center;
  padding-left: 4.5rem;
  gap: 1rem;

  h1 {
    color: #ffffff;
    font-size: 1.875rem;
  }

  span {
    color: #ffffff;
  }
`;

export const OrgNameAndAddressContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 0.3rem;
  }
`;

export const BackgroundLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f27006;
  border-radius: 10px;
  width: 4rem;
  height: 4rem;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 15px;
  background: #114a80;

  margin-left: 6rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const FormPetRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  padding: 4rem 5rem 5rem 5rem;
`;

export const TitleAndBorderBottom = styled.div`
  width: 34rem;

  h1 {
    color: #0d3b66;
    font-size: 2.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #d3e2e5;
  }
`;

export const FormAndOrgInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 1.9375rem;

  background: #fdeced;
`;
