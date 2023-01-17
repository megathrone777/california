import { styled } from "~/theme";

export const StyledWrapper = styled("div")({});

export const StyledTitle = styled("h2")(({ theme: { fonts, rem } }) => ({
  color: "black",
  fontFamily: fonts.fontReadex,
  fontSize: rem(42),
  lineHeight: rem(52),
  marginBottom: rem(25),
  textAlign: "center",
}));

export const StyledForm = styled("form")(({ theme: { rem } }) => ({
  maxWidth: rem(650),
  height: rem(60),
  marginInline: "auto",
  position: "relative",
  marginBottom: rem(20),
}));

export const StyledInput = styled("input")(({ theme: { colors, rem } }) => ({
  width: "100%",
  height: "100%",
  fontSize: rem(14),
  borderRadius: rem(100),
  border: `${rem((1))} solid ${colors.grayLighter}`,
  backgroundColor: colors.grayLightest,
  paddingInline: rem(65),
}));

export const StyledButton = styled("button")(({ theme: { rem } }) => ({
  position: "absolute",
  top: "calc(50% - 15px)",
  left: rem(20),
  width: rem(30),
}));