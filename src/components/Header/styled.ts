import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { rem } }) => ({
  alignItems: "center",
  display: "flex",
  height: rem(80),
  justifyContent: "space-between",
  marginBottom: rem(30),
}));
