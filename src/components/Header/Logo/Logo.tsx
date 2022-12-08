import React from "react";

import { StyledWrapper, StyledLink } from "./styled";

const Logo: React.FC = () => (
  <StyledWrapper>
    <StyledLink href ="/">
      <img src="images/header_logo.png" alt="header_logo"/>
    </StyledLink>
  </StyledWrapper>
);

export { Logo };