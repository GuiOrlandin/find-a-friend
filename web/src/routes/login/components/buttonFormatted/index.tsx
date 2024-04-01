import { ButtonContainer } from "./styles";

interface ButtonFormattedProps {
  variant: string;
  text: string;
}

export default function ButtonFormatted({
  variant,
  text,
}: ButtonFormattedProps) {
  return (
    <>
      <ButtonContainer variant={variant}>{text}</ButtonContainer>
    </>
  );
}
