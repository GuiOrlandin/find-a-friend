import styled from "styled-components";

interface ButtonFormattedProps {
  variant: string;
}

export const ButtonContainer = styled.button<ButtonFormattedProps>`
  width: 30.5rem;
  height: 4.5rem;
  border-radius: 20px;
  border: none;
  font-weight: 800;

  background: ${({ variant }) => (variant === "login" ? "#0D3B66" : "#F5F8FA")};
  color: ${({ variant }) => (variant === "login" ? "#FFFFFF" : "#0D3B66")};
`;
