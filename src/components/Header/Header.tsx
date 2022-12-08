import React from "react";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Buttons } from "./Buttons";
import { StyledWrapper } from "./styled";

const Header: React.FC = () => (
  <StyledWrapper>
    <Logo />
    <Menu />
    <Buttons />
  </StyledWrapper>
);

export { Header };