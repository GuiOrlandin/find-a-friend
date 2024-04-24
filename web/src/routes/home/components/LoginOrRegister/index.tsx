import { useNavigate } from "react-router-dom";
import {
  ButtonsContainer,
  LoginButton,
  LogoutButton,
  RegisterOrgButton,
  RegisterPetButton,
} from "./styles";
import { useEffect, useState } from "react";
import { tokenStore } from "../../../../store/tokenStore";
import { emailStore } from "../../../../store/emailStore";

export default function LoginOrRegister() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = tokenStore((state) => state.token);
  const setToken = tokenStore((state) => state.setToken);
  const setEmail = emailStore((state) => state.setEmail);
  const removeEmail = emailStore((state) => state.removeEmail);
  const email = emailStore((state) => state.email);
  const removeToken = tokenStore((state) => state.removeToken);
  const storeToken = localStorage.getItem("storeToken");
  const storeEmail = localStorage.getItem("storeEmail");

  function handleLogout() {
    localStorage.removeItem("storeToken");
    localStorage.removeItem("storeEmail");
    removeToken();
    removeEmail();
    window.location.reload();
  }

  useEffect(() => {
    if (!token && storeToken && storeEmail) {
      setToken(storeToken);
      setEmail(storeEmail);
    }

    if (token && email) {
      setIsAuthenticated(true);
    }
  }, [token, email]);

  function handleNavigate(parameter: string) {
    navigate(`/${parameter}`);
  }
  return (
    <ButtonsContainer>
      {isAuthenticated ? (
        <>
          <RegisterPetButton
            onClick={() => navigate(`/petRegister/${email}`, { replace: true })}
          >
            Cadastrar Pet
          </RegisterPetButton>
          <LogoutButton onClick={() => handleLogout()}>Sair</LogoutButton>
        </>
      ) : (
        <>
          <LoginButton onClick={() => handleNavigate("login")}>
            Entrar
          </LoginButton>
          <RegisterOrgButton onClick={() => handleNavigate("registerOrg")}>
            Registrar
          </RegisterOrgButton>
        </>
      )}
    </ButtonsContainer>
  );
}
