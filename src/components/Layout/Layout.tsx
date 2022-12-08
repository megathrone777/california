import React from "react";
import { useOutlet } from "react-router-dom";

import { Header } from "~/components/Header";
import { StyledContent, StyledWrapper } from "./styled";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <StyledWrapper>
      <Header />
      <StyledContent>{outlet}</StyledContent>
      Footer
    </StyledWrapper>
  );
};

export { Layout };
