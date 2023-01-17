import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { rem } }) => ({
  maxWidth: rem(650),
  marginInline: "auto",
  marginBottom: rem(70),
}));

export const StyledList = styled("ul")(({ theme: { rem } }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: rem(7),
}));

export const StyledItem = styled("li")({});

export const StyledButton = styled("button")(({ theme: { colors, rem } }) => ({
  height: rem(40),
  fontSize: rem(14),
  lineHeight: rem(17),
  paddingInline: rem(22),
  borderRadius: rem(200),
  border: `${rem((1))} solid ${colors.grayLighter}`,

  ":hover": {
    borderColor: "black",
  }
}));


