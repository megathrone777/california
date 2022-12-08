import React from "react";

import { StyledUl, StyledWrapper } from "./styled";
import { Item } from "./Item";

const Menu: React.FC = () => (
  <StyledWrapper>
    <StyledUl>
      <Item text="All Products"/>
      <Item text="Solutions"/>
      <Item text="About"/>
      <Item text="Support"/>
    </StyledUl>
  </StyledWrapper>
);

export { Menu };