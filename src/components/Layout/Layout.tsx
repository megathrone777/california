import React from "react";

import { Header, Slider } from "~/components";
import { StyledWrapper } from "./styled";

const Layout: React.FC = () => (
  <StyledWrapper>
    <Header />
    <Slider />
    Footer
  </StyledWrapper>
);

export { Layout };
