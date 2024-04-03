import { ButtonContainer } from "./styles";

interface ButtonFormattedProps {
  variant?: string;
  text: string;
  onClick?: () => void;
}

export default function ButtonFormatted({
  variant,
  text,
  onClick,
}: ButtonFormattedProps) {
  return (
    <ButtonContainer onClick={onClick} variant={variant}>
      {text}
    </ButtonContainer>
  );
}
