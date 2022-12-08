import React from "react";

import { Header, Slider, Media, Products, Around } from "~/components";
import { StyledWrapper } from "./styled";

const Layout: React.FC = () => (
  <StyledWrapper>
    <Header />
    <Slider />
    <Media />
    <Products />
    <Around />
    Footer
  </StyledWrapper>
);

export { Layout };
