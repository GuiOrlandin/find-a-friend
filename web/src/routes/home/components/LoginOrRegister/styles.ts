import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 1rem 0 0 34rem;
  gap: 1rem;
`;

export const LoginButton = styled.button`
  background: #f4d35e;
  width: 6rem;
  padding: 0.75rem;

  color: #0d3b66;

  border-radius: 20px;
  border: none;

  font-size: 1rem;
  font-weight: 800;
`;

export const RegisterButton = styled(LoginButton)`
  width: 7rem;
`;
export const LogoutButton = styled(LoginButton)`
  margin-left: 7rem;
`;
