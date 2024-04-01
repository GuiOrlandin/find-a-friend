import styled from "styled-components";

export const InputContentAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    color: #0d3b66;
    font-weight: 700;
  }

  input {
    width: 30.5rem;
    height: 4rem;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 10px;
    padding: 1.125rem;
    color: #0d3b66;
    font-weight: 700;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    color: #0d3b66;
    font-weight: 700;
  }

  button {
    position: absolute;
    margin-top: 3.8rem;
    left: 73rem;
    background: none;
    border: none;
  }
`;
