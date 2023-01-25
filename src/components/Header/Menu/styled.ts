import { styled } from "~/theme";

export const StyledWrapper = styled("div")({});

export const StyledList = styled("ul")(({ theme: { devices, rem } }) => ({
  display: "flex",
  gap: rem(40),

  [devices["tablet"]]: {
    gap: rem(20),
  },
}));
