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
  font-size: 1.25rem;

  background: ${({ variant }) =>
    variant === "login" || "register" ? "#0D3B66" : "#F5F8FA"};
  color: ${({ variant }) =>
    variant === "login" || "register" ? "#FFFFFF" : "#0D3B66"};
`;
