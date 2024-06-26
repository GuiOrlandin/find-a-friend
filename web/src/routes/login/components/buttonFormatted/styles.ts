import styled from "styled-components";

interface ButtonFormattedProps {
  variant?: string;
}

export const ButtonContainer = styled.button<ButtonFormattedProps>`
  width: 30.5rem;
  height: 4.5rem;
  border-radius: 20px;
  border: none;
  font-weight: 800;
  font-size: 1.25rem;

  background: ${({ variant }) => (variant ? "#0D3B66" : "#F5F8FA")};
  color: ${({ variant }) => (variant ? "#FFFFFF" : "#0D3B66")};
`;
