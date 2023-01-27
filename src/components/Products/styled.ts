import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { rem } }) => ({
  marginBottom: rem(75),
  minHeight: rem(485),
  position: "relative",
}));

export const StyledList = styled("div")(({ theme: { rem } }) => ({
  display: "flex",
  gap: rem(30),
}));
