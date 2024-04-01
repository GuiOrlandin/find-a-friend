import { useNavigate } from "react-router-dom";
import { ButtonsContainer, LoginButton, RegisterButton } from "./styles";

export default function LoginOrRegister() {
  const navigate = useNavigate();

  function handleNavigate(parameter: string) {
    navigate(`/${parameter}`);
  }
  return (
    <ButtonsContainer>
      <LoginButton onClick={() => handleNavigate("login")}>Entrar</LoginButton>
      <RegisterButton onClick={() => handleNavigate("register")}>
        Registrar
      </RegisterButton>
    </ButtonsContainer>
  );
}
