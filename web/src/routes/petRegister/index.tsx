import {
  BackgroundLogo,
  LogoutButton,
  OrgInformationContainer,
  OrgNameAndAddressContainer,
  PetRegisterContainer,
} from "../../styles/pages/petRegister/styles";

import littleLogoFace from "../../assets/littleLogoFace.svg";

import { LuLogOut } from "react-icons/lu";

export default function PetRegister() {
  return (
    <PetRegisterContainer>
      <OrgInformationContainer>
        <BackgroundLogo>
          <img src={littleLogoFace} alt="" width={27} />
        </BackgroundLogo>
        <OrgNameAndAddressContainer>
          <h1>Seu Cãopanheiro</h1>
          <span>Rua do meio, 123 , Boa viagem, Recife - PE </span>
        </OrgNameAndAddressContainer>

        <LogoutButton>
          <LuLogOut color="FFFFFF" />
        </LogoutButton>
      </OrgInformationContainer>

      <h1>Adicione um pet</h1>
    </PetRegisterContainer>
  );
}
