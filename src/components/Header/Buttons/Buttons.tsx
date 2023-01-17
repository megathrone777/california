import React from "react";

import { HeaderSearchSvg, HeaderCartSvg } from "~/icons";
import { StyledButton, StyledWrapper } from "./styled";

const Buttons: React.FC = () => (
  <StyledWrapper>
    <StyledButton type="button">
      <HeaderSearchSvg />
    </StyledButton>

    <StyledButton type="button">
      <HeaderCartSvg />
    </StyledButton>
  </StyledWrapper>
);

export { Buttons };
