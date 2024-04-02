import { useState, ChangeEvent } from "react";

import { FiEyeOff } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";

import { InputContainer, InputContentAndTitle } from "./styles";

interface Props {
  inputTitle: string;
  isPassword: boolean;
  handleChangeAccountDetails: (event: string) => void;
}

export default function InputFormatted({
  inputTitle,
  isPassword,
  handleChangeAccountDetails,
}: Props) {
  const [showPassword, setShowPassword] = useState(true);
  const [inputType, setInputType] = useState("password");

  function handleHidePassword() {
    setShowPassword(!showPassword);
    setInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password"
    );
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    handleChangeAccountDetails(value);
  }

  return (
    <>
      {isPassword ? (
        <InputContainer>
          <InputContentAndTitle>
            <span>{inputTitle}</span>
            <input onChange={handleChange} type={inputType}></input>
          </InputContentAndTitle>
          <button onClick={() => handleHidePassword()}>
            {showPassword ? (
              <FiEyeOff size={24} color="#0D3B66" />
            ) : (
              <FaRegEye size={24} color="#0D3B66" />
            )}
          </button>
        </InputContainer>
      ) : (
        <InputContentAndTitle>
          <span>{inputTitle}</span>
          <input onChange={handleChange}></input>
        </InputContentAndTitle>
      )}
    </>
  );
}
