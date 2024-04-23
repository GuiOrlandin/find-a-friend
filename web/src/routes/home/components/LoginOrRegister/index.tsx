import { useNavigate } from "react-router-dom";
import {
  ButtonsContainer,
  LoginButton,
  LogoutButton,
  RegisterButton,
} from "./styles";
import { useEffect, useState } from "react";
import { tokenStore } from "../../../../store/tokenStore";

export default function LoginOrRegister() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = tokenStore((state) => state.token);
  const setToken = tokenStore((state) => state.setToken);
  const removeToken = tokenStore((state) => state.removeToken);
  const storeToken = localStorage.getItem("storeToken");

  function handleLogout() {
    localStorage.removeItem("storeToken");
    removeToken();
  }

  useEffect(() => {
    if (!token && storeToken) {
      setToken(storeToken);
    }

    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  function handleNavigate(parameter: string) {
    navigate(`/${parameter}`);
  }
  return (
    <ButtonsContainer>
      {isAuthenticated ? (
        <LogoutButton onClick={() => handleLogout()}>Sair</LogoutButton>
      ) : (
        <>
          <LoginButton onClick={() => handleNavigate("login")}>
            Entrar
          </LoginButton>
          <RegisterButton onClick={() => handleNavigate("registerOrg")}>
            Registrar
          </RegisterButton>
        </>
      )}
    </ButtonsContainer>
  );
}
