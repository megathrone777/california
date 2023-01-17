import React from "react";

import { Item } from "./Item";
import { StyledUl, StyledWrapper } from "./styled";

const Menu: React.FC = () => (
  <StyledWrapper>
    <StyledUl>
      <Item text="All Products" />
      <Item text="Solutions" />
      <Item text="About" />
      <Item text="Support" />
    </StyledUl>
  </StyledWrapper>
);

export { Menu };
