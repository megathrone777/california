import React from "react";

import { Header, Slider, Media } from "~/components";
import { StyledWrapper } from "./styled";

const Layout: React.FC = () => (
  <StyledWrapper>
    <Header />
    <Slider />
    <Media />
    Footer
  </StyledWrapper>
);

export { Layout };
