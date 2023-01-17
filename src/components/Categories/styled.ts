import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { rem } }) => ({
  marginBottom: rem(75),
  minHeight: rem(550),
  position: "relative",
}));

export const StyledTitle = styled("h2")(({ theme: { fonts, rem } }) => ({
  color: "black",
  fontFamily: fonts.fontReadex,
  fontSize: rem(42),
  lineHeight: rem(53),
  marginBottom: rem(10),
  textAlign: "center",
}));

export const StyledText = styled("p")(({ theme: { fonts, rem } }) => ({
  color: "black",
  fontFamily: fonts.fontReadex,
  fontSize: rem(13),
  lineHeight: rem(17),
  marginBottom: rem(30),
  textAlign: "center",
}));

export const StyledList = styled("div")(({ theme: { rem } }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: rem(28),
}));
