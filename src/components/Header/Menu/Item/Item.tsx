import React from "react";

import { StyledWrapper, StyledLink } from "./styled";
import { TProps } from "./types";

const Item: React.FC<TProps> = ({ text }) => (
  <StyledWrapper>
    <StyledLink href="#">{text}</StyledLink>
  </StyledWrapper>
);

export { Item };
