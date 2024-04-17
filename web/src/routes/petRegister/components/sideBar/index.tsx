import { IoMdArrowRoundBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";

import { ButtonBackPage, SideBarContainer } from "./styles";
import littleLogoFace from "../../../../assets/littleLogoFace.svg";

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <SideBarContainer>
      <img src={littleLogoFace} alt="" width={27} />
      <ButtonBackPage onClick={() => navigate("/")}>
        <IoMdArrowRoundBack color="#0D3B66" />
      </ButtonBackPage>
    </SideBarContainer>
  );
}
