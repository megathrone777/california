import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { devices, rem } }) => ({
  margin: `0 auto ${rem(70)}`,
  maxWidth: rem(650),
  minHeight: rem(87),
  position: "relative",

  [devices["desktop"]]: {
    marginBottom: rem(50),
  },
}));

export const StyledList = styled("ul")(({ theme: { rem } }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: rem(7),
  justifyContent: "center",
}));

export const StyledButton = styled("button")<{ isActive: boolean }>(
  ({ isActive, theme: { colors, rem } }) => ({
    height: rem(40),
    fontSize: rem(14),
    lineHeight: rem(17),
    paddingInline: rem(22),
    borderRadius: rem(200),
    border: `${rem(1)} solid ${isActive ? "black" : colors.grayLighter}`,

    ":hover": {
      borderColor: "black",
    },
  })
);
