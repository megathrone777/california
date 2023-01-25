import React from "react";

import { StyledWrapper, StyledLink } from "./styled";

const Logo: React.FC = () => (
  <StyledWrapper>
    <StyledLink href="/">
      <img alt="Logo" src="images/logo_img.png" />
    </StyledLink>
  </StyledWrapper>
);

export { Logo };
