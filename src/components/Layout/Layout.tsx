import React from "react";

import {
  Categories,
  Header,
  Slider,
  Media,
  Products,
  Ideas,
  Search,
  Thing,
} from "~/components";
import { StyledWrapper } from "./styled";

const Layout: React.FC = () => (
  <StyledWrapper>
    <Header />
    <Slider />
    <Media />
    <Products />
    <Categories />
    <Ideas />
    <Search />
    <Thing />
    Footer
  </StyledWrapper>
);

export { Layout };
