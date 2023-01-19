import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { colors, rem } }) => ({
  maxWidth: rem(935),
  borderRadius: rem(16),
  margin: `0 auto ${rem(75)}`,
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
  borderRadius: `${rem(55)} 0 0 ${rem(55)}`,
  border: `${rem(1)} solid black`,
}));

export const StyledButton = styled("button")(({ theme: { rem } }) => ({
  backgroundColor: "black",
  borderRadius: `0 ${rem(55)} ${rem(55)} 0`,
  color: "white",
  fontSize: rem(14),
  height: rem(50),
  lineHeight: rem(17),
  marginBottom: rem(75),
  overflow: "hidden",
  verticalAlign: "top",
  width: rem(110),

  ":hover": {
    opacity: 0.5,
  },
}));

export const StyledTitle = styled("h2")(({ theme: { fonts, rem } }) => ({
  paddingTop: rem(47),
  color: "black",
  fontFamily: fonts.fontReadex,
  fontSize: rem(42),
  lineHeight: rem(52),
  marginBottom: rem(10),
  textAlign: "center",
}));

export const StyledText = styled("p")(({ theme: { rem } }) => ({
  color: "black",
  fontSize: rem(16),
  lineHeight: rem(19),
  marginBottom: rem(15),
  textAlign: "center",
}));
