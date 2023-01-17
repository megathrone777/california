import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { colors, rem } }) => ({
  backgroundColor: colors.grayLightest,
  borderRadius: rem(15),
  flex: "0 1 33.3333%",
  maxWidth: "33.3333",
  paddingTop: rem(35),
  textAlign: "center",
}));

export const StyledTitle = styled("h2")(({ theme: { fonts, rem } }) => ({
  fontFamily: fonts.fontReadex,
  fontSize: rem(28),
  lineHeight: rem(35),
  marginBottom: rem(30),
}));

export const StyledSubtitle = styled("p")(({ theme: { fonts, rem } }) => ({
  fontFamily: fonts.fontReadex,
  fontSize: rem(13),
  lineHeight: rem(17),
}));

export const StyledHelper = styled("div")(({ theme: { rem } }) => ({
  marginBottom: rem(30),
}));

export const StyledButton = styled("button")(({ theme: { rem } }) => ({
  border: `${rem(1)} solid black`,
  borderRadius: rem(200),
  fontSize: rem(18),
  height: rem(50),
  minWidth: rem(170),
  paddingInline: rem(5),
  transitionDuration: "0.2s",
  transitionProperty: "background-color, color",
  transitionTimingFunction: "ease-in",
  willChange: "contents",

  ":hover": {
    backgroundColor: "black",
    color: "white",
  },
}));

export const StyledMedia = styled("div")(({ theme: { rem } }) => ({
  height: rem(250),
  textAlign: "center",
}));
