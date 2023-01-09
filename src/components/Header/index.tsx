import { HeaderContainer } from "./styles";

import headerIgm from "../../assets/header.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerIgm} alt="" />
    </HeaderContainer>
  );
}
