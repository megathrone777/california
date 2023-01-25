import React from "react";

import { Item } from "./Item";
import { StyledList, StyledWrapper } from "./styled";

const Menu: React.FC = () => (
  <StyledWrapper>
    <StyledList>
      <Item text="All Products" />
      <Item text="Solutions" />
      <Item text="About" />
      <Item text="Support" />
    </StyledList>
  </StyledWrapper>
);

export { Menu };
