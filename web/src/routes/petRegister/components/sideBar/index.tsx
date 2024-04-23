import { IoMdArrowRoundBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";

import { ButtonBackPage, SideBarContainer } from "./styles";
import littleLogoFace from "../../../../assets/littleLogoFace.svg";

interface Props {
  redirectSite: string;
}

export default function SideBar({ redirectSite }: Props) {
  const navigate = useNavigate();

  function handleNavigate(redirectSite: string) {
    navigate(`/${redirectSite}`, { replace: true });
    window.location.reload();
  }

  return (
    <SideBarContainer>
      <img src={littleLogoFace} alt="" width={27} />
      <ButtonBackPage onClick={() => handleNavigate(redirectSite)}>
        <IoMdArrowRoundBack color="#0D3B66" />
      </ButtonBackPage>
    </SideBarContainer>
  );
}
