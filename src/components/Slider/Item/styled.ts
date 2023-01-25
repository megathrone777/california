import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { colors } }) => ({
  backgroundColor: colors.greenLight,
  display: "flex",
  height: "100%",
}));

export const StyledContent = styled("div")(({ theme: { rem } }) => ({
  alignItems: "flex-start",
  display: "flex",
  flex: "0 1 50%",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: rem(55),
  width: "50%",
}));

export const StyledTitle = styled("h2")(({ theme: { devices, fonts, rem } }) => ({
  fontFamily: fonts.fontReadex,
  fontSize: rem(58),
  lineHeight: rem(70),
  marginBottom: rem(30),

  [devices["desktop"]]: {
    fontSize: rem(46),
    lineHeight: rem(50),
  },
}));

export const StyledText = styled("p")(({ theme: { rem } }) => ({
  lineHeight: rem(19),
  marginBottom: rem(30),
}));

export const StyledMedia = styled("div")({
  alignItems: "flex-end",
  display: "flex",
});
