import { styled } from "~/theme";

export const StyledWrapper = styled("div")({});

export const StyledUl = styled("ul")(({ theme: { rem } }) => ({
  display: "flex",
  gap: rem(40),
}));
