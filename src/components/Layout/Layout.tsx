import React from "react";
import { useOutlet } from "react-router-dom";

import { Header } from "~/components/Header";
import { StyledContent } from "./styled";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <>
      <Header />
      <StyledContent>{outlet}</StyledContent>
      Footer
    </>
  );
};

export { Layout };
