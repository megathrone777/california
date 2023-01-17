import { styled } from "~/theme";

export const StyledWrapper = styled("div")({});

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
  marginBottom: rem(55),
  textAlign: "center",
}));

export const StyledLayout = styled("div")(({ theme: { rem } }) => ({
  display: "flex",
  gap: rem(35),
  marginBottom: rem(90),
}));

export const StyledContent = styled("div")(({ theme: { rem } }) => ({
  fontSize: rem(24),
  lineHeight: rem(30),
  paddingTop: rem(10),

  p: {
    marginBottom: rem(30),
  },
}));

export const StyledMedia = styled("div")({});
