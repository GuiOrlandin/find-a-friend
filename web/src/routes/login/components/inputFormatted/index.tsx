import { useState, ChangeEvent, useEffect } from "react";

import { FiEyeOff } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";

import {
  InputContainer,
  InputContentAndTitle,
  TitleAndMaximumCharactersContainer,
} from "./styles";

interface Props {
  inputTitle: string;
  handleChangeAccountDetails?: (event: string) => void;
  pageWithTheComponent: string;
  inputActive: string;
}

interface IsActiveProps {
  about: boolean;
  text: boolean;
  password: boolean;
}

export default function InputFormatted({
  inputTitle,
  handleChangeAccountDetails,
  pageWithTheComponent,
  inputActive,
}: Props) {
  const [showPassword, setShowPassword] = useState(true);
  const [inputType, setInputType] = useState("password");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [pageActive, setPageActive] = useState("");
  const [isActive, setIsActive] = useState<IsActiveProps>();

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
    handleChangeAccountDetails!(value);
  }

  useEffect(() => {
    if (inputActive === "text") {
      setIsActive({
        text: true,
        about: false,
        password: false,
      });
    }

    if (inputActive === "about") {
      setIsActive({
        text: false,
        about: true,
        password: false,
      });
    }

    if (inputActive === "password") {
      setIsActive({
        text: false,
        about: false,
        password: true,
      });
    }

    if (pageWithTheComponent) {
      setPageActive(pageWithTheComponent);
    }
  }, [inputActive, pageWithTheComponent]);

  return (
    <>
      {isActive?.password && (
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

      {isActive?.about && (
        <InputContentAndTitle variant={pageActive}>
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

      {isActive?.text && (
        <InputContentAndTitle variant={pageActive}>
          <span>{inputTitle}</span>
          <input onChange={handleChange}></input>
        </InputContentAndTitle>
      )}
    </>
  );
}
