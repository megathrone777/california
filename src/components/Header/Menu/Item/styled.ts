import { styled } from "~/theme";

export const StyledWrapper = styled("div")({});

export const StyledLink = styled("a")({
  color: "black",
  textDecoration: "none",
  textTransform: "uppercase",

  ":hover": {
    opacity: 0.7,
  },
});
