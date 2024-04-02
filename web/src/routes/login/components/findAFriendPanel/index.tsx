import animalsLogo from "../../../../assets/animalsLogo.svg";
import logoFindAFriend from "../../../../assets/findAFriendLogo.svg";

import { FindAFriendPanelContainer, LogoFindAFriendContainer } from "./styles";

export default function FindAFriendPanel() {
  return (
    <FindAFriendPanelContainer>
      <LogoFindAFriendContainer>
        <img src={logoFindAFriend} />
      </LogoFindAFriendContainer>
      <img src={animalsLogo} />
    </FindAFriendPanelContainer>
  );
}
