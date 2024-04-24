import styled from "styled-components";

interface petInfoProps {
  variant?: string;
}

export const PetInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 19.875rem;
  height: 100%;
  background: #fdeced;
`;

export const PetInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 44rem;
  margin-top: 6.875rem;
  border-radius: 20px;
  background: #ffffff;
`;

export const BigPetImageContainer = styled.div`
  display: flex;
  height: 26rem;

  img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 44rem;
  }
`;
export const LittlePetImageContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 4.5rem;
`;

export const LittlePetImage = styled.img<petInfoProps>`
  display: flex;

  width: 5rem;
  height: 5rem;
  border-radius: 15px;

  cursor: pointer;

  opacity: ${({ variant }) => variant !== "active" && "0.3"};

  border: ${({ variant }) =>
    variant === "active" ? "2px solid #0d3b66" : "none"};

  opacity: ${({ variant }) => (variant === "active" ? "unset" : "none")};
`;

export const CharacteristicsPetContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-left: 4.5rem;
    color: #0d3b66;
    font-size: 3.375rem;
  }

  p {
    margin: 1.625rem 4.5rem 2.6875rem 4.5rem;
    font-size: 1.125rem;
    color: #0d3b66;
  }
`;

export const EnergyEnvironmentAndSizePetInfo = styled.div`
  display: flex;
  margin: 0 4.5rem;
  gap: 0.875rem;
  padding-bottom: 2.5rem;

  border-bottom: 1px solid #d3e2e5;
`;

export const OrgInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 4.5rem;
  padding-bottom: 3.125rem;

  h1 {
    margin: 0;
    font-size: 1.875rem;
  }

  border-bottom: 1px solid #d3e2e5;
`;
export const OrgImageNameAndAddressContainer = styled.div`
  display: flex;
`;

export const OrgNameAndAddressContainer = styled.div`
  margin-left: 1.375rem;
  color: #0d3b66;

  p {
    margin: 0;
    font-size: 1rem;
  }
`;
export const PhoneNumberContainer = styled.div`
  display: flex;
  align-items: center;
  width: 13.5625rem;
  padding: 0.8125rem 1.6rem;
  margin-left: 5.1rem;
  gap: 0.5rem;
  border-radius: 10px;
  background: #f4f4f4;
  color: #0d3b66;

  p {
    margin: 0;
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

  img {
    width: 1.75rem;
  }
`;

export const EnergyPetInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.625rem;
  gap: 1rem;

  p {
    margin: 0;
    color: #0d3b66;
    font-size: 1.125rem;
    font-weight: 500;
  }
  border: 1px solid #d3e2e5;
  border-radius: 20px;
`;

export const EnergySvgContainer = styled.div`
  display: flex;
`;

export const EnvironmentPetInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  gap: 1rem;

  p {
    margin: 0;
    color: #0d3b66;
    font-size: 1.125rem;
    font-weight: 500;
  }

  border: 1px solid #d3e2e5;
  border-radius: 20px;
`;

export const SizePetInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  width: 10.625rem;
  gap: 1rem;

  p {
    margin: 0;
    color: #0d3b66;
    font-size: 1.125rem;
    font-weight: 500;
  }

  border: 1px solid #d3e2e5;
  border-radius: 20px;
`;

export const PetRequirements = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4.5rem 2.5rem 4.5rem;
  padding-bottom: 3.125rem;

  h1 {
    font-size: 1.875rem;
    margin: 0 0 2rem 0;
  }

  border-bottom: 1px solid #d3e2e5;
`;
export const PetRequirementsContent = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  width: 34.75rem;
  border-radius: 6px;
  border: 1px solid #f15156;
  padding: 1rem 0 1rem 2.5rem;
  margin-bottom: 0.625rem;

  background: #ffe0e1;
  color: #f15156;
  font-weight: 500;
`;

export const WhatsAppRedirectButton = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 4rem;
  justify-content: center;
  margin: 0 4.5rem 2.5rem 4.5rem;

  font-size: 1.125rem;
  font-weight: 700;
  border: none;
  color: #ffffff;
  border-radius: 20px;
  background: #3cdc8c;
`;

export const SkeletonBigPetImageContainer = styled.div`
  display: block;
  height: 26rem;
  border: none;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 44rem;
`;

export const SkeletonPetDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 5rem;
  margin-bottom: 1rem;
`;
export const SkeletonPetInformation = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0 4.5rem 2.5rem 4.5rem;
  margin-bottom: 1rem;
  padding-bottom: 2.5rem;

  border-bottom: 1px solid #d3e2e5;
`;
