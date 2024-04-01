import { useState } from "react";

import { FiEyeOff } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";

import { InputContainer, InputContentAndTitle } from "./styles";

interface Props {
  inputTitle: string;
  isPassword: boolean;
}

export default function InputFormatted({ inputTitle, isPassword }: Props) {
  const [showPassword, setShowPassword] = useState(true);
  const [inputType, setInputType] = useState("password");
  function handleHidePassword() {
    setShowPassword(!showPassword);
    setInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password"
    );
  }

  return (
    <>
      {isPassword ? (
        <InputContainer>
          <InputContentAndTitle>
            <span>{inputTitle}</span>
            <input type={inputType}></input>
          </InputContentAndTitle>
          <button onClick={() => handleHidePassword()}>
            {showPassword ? (
              <FaRegEye size={24} color="#0D3B66" />
            ) : (
              <FiEyeOff size={24} color="#0D3B66" />
            )}
          </button>
        </InputContainer>
      ) : (
        <InputContentAndTitle>
          <span>{inputTitle}</span>
          <input></input>
        </InputContentAndTitle>
      )}
    </>
  );
}
