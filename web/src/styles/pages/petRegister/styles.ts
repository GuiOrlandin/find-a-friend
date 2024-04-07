import styled from "styled-components";

export const PetRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fdeced;
  height: 100%;
`;

export const OrgInformationContainer = styled.div`
  display: flex;
  width: 44.25rem;
  height: 7.5625rem;
  background: #0d3b66;
  border-radius: 20px;
  align-items: center;
  padding: 1.75rem 4rem 1.75rem 4rem;
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
  height: 100%;
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
  height: 100%;
  gap: 1.9375rem;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    color: #0d3b66;
    font-weight: 700;
  }

  select {
    width: 34.25rem;
    height: 4rem;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 10px;
    padding: 1.125rem;
    color: #0d3b66;
    font-weight: 700;
    font-size: 1.125rem;
  }
`;

export const UploadImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0d3b66;
  border-radius: 10px;
  background: #f5f8fa;
  text-align: center;
  height: 9.5rem;

  &:hover {
    background: #d3e2e5;
    cursor: pointer;
  }

  p {
    font-size: 1.125rem;
  }

  input {
    display: none;
  }
`;

export const UploadImageAndTitleContainer = styled.div`
  span {
    display: flex;
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
    color: #0d3b66;
    font-weight: 700;
  }
`;

export const UploadImageAndTitleContainerOnHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0d3b66;
  border-radius: 10px;
  background: #d3e2e5;
  text-align: center;
  height: 9.5rem;

  p {
    font-size: 1.125rem;
  }

  input {
    display: none;
  }
`;

export const ImageNameContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.8125rem;
  height: 3.125rem;
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  color: #0d3b66;
  gap: 0.5rem;
  margin-top: 1rem;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  left: 31rem;
  background: none;
  border: none;
  svg {
    width: 20px;
    height: 20px;
  }
`;
