import { useState, ChangeEvent } from "react";

import { FiEyeOff } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";

import {
  InputContainer,
  InputContentAndTitle,
  TitleAndMaximumCharactersContainer,
} from "./styles";

interface Props {
  inputTitle: string;
  isPassword: boolean;
  handleChangeAccountDetails: (event: string) => void;
  isPetRegister?: boolean;
  isAbout?: boolean;
  isText?: boolean;
}

export default function InputFormatted({
  inputTitle,
  isPassword,
  handleChangeAccountDetails,
  isPetRegister,
  isAbout,
  isText,
}: Props) {
  const [showPassword, setShowPassword] = useState(true);
  const [inputType, setInputType] = useState("password");
  const [textAreaValue, setTextAreaValue] = useState("");

  function handleHidePassword() {
    setShowPassword(!showPassword);
    setInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password"
    );
  }

  const handleCheckLimitCharacters = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    if (value.length <= 300) {
      setTextAreaValue(value);
    }
  };

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    const { value } = event.target;
    handleChangeAccountDetails(value);
  }

  return (
    <>
      {isPassword && (
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
      )}

      {isAbout && (
        <InputContentAndTitle variant={isPetRegister!}>
          <TitleAndMaximumCharactersContainer>
            <span>{inputTitle}</span>
            <p>Máximo de 300 catacteres</p>
          </TitleAndMaximumCharactersContainer>
          <textarea
            onChange={(event) => {
              handleCheckLimitCharacters(event);
              handleChange(event);
            }}
            value={textAreaValue}
          ></textarea>
        </InputContentAndTitle>
      )}

      {isText && (
        <InputContentAndTitle variant={isPetRegister!}>
          <span>{inputTitle}</span>
          <input onChange={handleChange}></input>
        </InputContentAndTitle>
      )}
    </>
  );
}
