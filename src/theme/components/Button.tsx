import React from "react";

import { styled } from "~/theme";

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children }) => <StyledButton>{children}</StyledButton>;

const StyledButton = styled("button")(({ theme: { rem } }) => ({
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

  ":hover": {
    backgroundColor: "black",
    color: "white",
  },
}));

export { Button };
