import { styled } from "~/theme";

export const StyledWrapper = styled("div")({
  flex: "0 1 25%",
  width: "25%",
});

export const StyledMedia = styled("div")(({ theme: { rem } }) => ({
  height: rem(215),
  marginBottom: rem(40),
}));

export const StyledLink = styled("a")({
  display: "block",
  height: "100%",
  textAlign: "center",
});

export const StyledImage = styled("img")({
  maxHeight: "100%",
});

export const StyledName = styled("div")(({ theme: { fonts, rem } }) => ({
  fontFamily: fonts.fontReadex,
  fontSize: rem(22),
  lineHeight: rem(28),
  marginBottom: rem(12),
  whiteSpace: "nowrap",
}));

export const StyledDescription = styled("div")(({ theme: { rem } }) => ({
  fontSize: rem(14),
  lineHeight: rem(17),
  margingBottom: rem(25),
  minHeight: rem(75),
}));

export const StyledPrice = styled("p")(({ theme: { rem } }) => ({
  fontSize: rem(18),
  lineHeight: rem(22),
}));
