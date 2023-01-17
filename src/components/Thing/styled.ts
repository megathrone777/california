import { styled } from "~/theme";
import { colors } from "~/theme/variables";

export const StyledWrapper = styled("div")(({ theme: { rem } }) => ({
  maxWidth: rem(935),
  borderRadius: rem(16),
  marginInline: "auto",
  marginBottom: rem(75),
  backgroundColor: colors.greenLight,

}));

export const StyledMedia = styled("div")(({ theme: { rem } }) => ({
  textAlign: "center",
  marginBottom: rem(15),
}));

export const StyledForm = styled("form")(({ theme: { rem } }) => ({
  textAlign: "center",
  marginBottom: rem(1),
}));

export const StyledInput = styled("input")(({ theme: { rem } }) => ({
  height: rem(50),
  width: rem(285),
  backgroundColor: "transparent",
  paddingLeft: rem(30),
  marginBottom: rem(75),
  borderRadius: "55px 0 0 55px",

}));

export const StyledButton = styled("button")(({ theme: { rem } }) => ({
  color: "white",
  fontSize: rem(14),
  lineHeight: rem(17),
  backgroundColor: "black",
  height: rem(50),
  width: rem(110),
  borderRadius: "0 55px 55px 0",
  overflow: "hidden",
  marginBottom: rem(75),
  // border: "1px solid black",

  ":hover": {
  opacity: 0.5,
  }

}));

export const StyledTitle = styled("h2")(({ theme: { fonts, rem } }) => ({
  paddingTop: rem(47),
  color: "black",
  fontFamily: fonts.fontReadex,
  fontSize: rem(42),
  lineHeight: rem(52),
  marginBottom: rem(10),
  // marginTop: rem(45),
  textAlign: "center",
}));

export const StyledText = styled("p")(({ theme: {  rem } }) => ({
  color: "black",
  fontSize: rem(16),
  lineHeight: rem(19),
  marginBottom: rem(15),
  textAlign: "center",
}));
