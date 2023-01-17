import React from "react";

import { Categories, Header, Slider, Media, Products } from "~/components";
import { StyledWrapper } from "./styled";

const Layout: React.FC = () => (
  <StyledWrapper>
    <Header />
    <Slider />
    <Media />
    <Products />
    <Categories />
    Footer
  </StyledWrapper>
);

export { Layout };
