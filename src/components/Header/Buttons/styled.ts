import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { rem } }) => ({
  display: "flex",
  gap: rem(20),
}));

export const StyledButton = styled("button")(({ theme: { rem } }) => ({
  color: "black",
  width: rem(24),

  ":hover": {
    opacity: 0.7,
  },
}));
