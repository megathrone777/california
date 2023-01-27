import React from "react";

import { TProps } from "./types";
import { styled } from "~/theme";

const Button: React.FC<TProps> = ({ children }) => (
  <StyledButton>{children}</StyledButton>
);

const StyledButton = styled("button")(({ theme: { devices, rem } }) => ({
  border: `${rem(1)} solid black`,
  borderRadius: rem(200),
  fontSize: rem(18),
  height: rem(50),
  minWidth: rem(170),
  paddingInline: rem(5),
  transitionDuration: "0.2s",
  transitionProperty: "background-color, color",
  transitionTimingFunction: "ease-in",
  willChange: "contents",

  [devices["tablet"]]: {
    fontSize: rem(16),
    height: rem(40),
    maxWidth: rem(130),
  },

  ":hover": {
    backgroundColor: "black",
    color: "white",
  },
}));

export { Button };
