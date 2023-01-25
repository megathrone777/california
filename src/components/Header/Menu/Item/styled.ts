import { styled } from "~/theme";

export const StyledLink = styled("a")(({ theme: { devices, rem } }) => ({
  color: "black",
  textDecoration: "none",
  textTransform: "uppercase",

  [devices["tablet"]]: {
    fontSize: rem(12),
  },

  ":hover": {
    opacity: 0.7,
  },
}));
