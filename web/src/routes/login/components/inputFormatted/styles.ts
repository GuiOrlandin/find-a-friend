import styled from "styled-components";

interface InputFormattedProps {
  variant?: boolean;
  isAbout?: boolean;
}

export const InputContentAndTitle = styled.div<InputFormattedProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    color: #0d3b66;
    font-weight: 700;
  }

  input {
    width: ${({ variant }) => (variant ? "34.25rem" : "30.5rem")};
    height: 4rem;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 10px;
    padding: 1.125rem;
    color: #0d3b66;
    font-weight: 700;
    font-size: 1.125rem;
  }

  textarea {
    height: 9.375rem;
    background: #f5f8fa;
    border-radius: 10px;
    border: 1px solid #d3e2e5;
    padding: 1.125rem;
    resize: none;
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

export const TitleAndMaximumCharactersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p {
    color: #8fa7b2;
    font-size: 0.75rem;
  }
`;
