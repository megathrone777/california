import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { colors, rem } }) => ({
  height: rem(380),
  backgroundColor: colors.grayLightest,
}));

export const StyledLayout = styled("div")(({ theme: { rem } }) => ({
  marginInline: "auto",
  maxWidth: rem(1320),
  paddingInline: rem(10),
}));

export const StyledContent = styled("div")(({ theme: { rem } }) => ({
  display: "flex",
  paddingBlock: rem(45),
}));

export const StyledLogo = styled("div")(({ theme: { rem } }) => ({
  maxWidth: rem(370),
  padding: `0 ${rem(40)} 0 ${rem(25)}`,
}));

export const StyledLogoMedia = styled("div")(({ theme: { rem } }) => ({
  marginBottom: rem(20),
}));

export const StyledLogoText = styled("div")(({ theme: { rem } }) => ({
  color: "black",
  fontSize: rem(16),
  lineHeight: rem(19),
}));

export const StyledContentLayout = styled("div")(({ theme: { rem } }) => ({
  display: "flex",
  flex: "0 1 100%",
  justifyContent: "space-around",
  width: "100%",
  paddingRight: rem(75),
}));

export const StyledContentTitle = styled("h2")(({ theme: { fonts, rem } }) => ({
  fontFamily: fonts.fontReadex,
  fontSize: rem(22),
  marginBottom: rem(20),
}));

export const StyledContentMenu = styled("div")({});

export const StyledContentMenuList = styled("ul")({});

export const StyledContentMenuItem = styled("div")(({ theme: { rem } }) => ({
  marginBottom: rem(15),
}));

export const StyledContentMenuLink = styled("a")({
  textDecoration: "none",
  color: "black",
});

export const StyledCopyright = styled("div")(({ theme: { rem } }) => ({
  height: rem(80),
}));

export const StyledCopyrightContent = styled("div")(({ theme: { rem } }) => ({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
  paddingInline: rem(30),
}));

export const StyledCopyrightColumn = styled("div")(({ theme: { fonts, rem } }) => ({
  display: "flex",
  fontFamily: fonts.fontReadex,
  fontSize: rem(18),
  lineHeight: rem(22),

  p: {
    fontFamily: fonts.fontInter,
    marginLeft: rem(5),
  },
}));

export const StyledCopyrightButton = styled("button")(({ theme: { rem } }) => ({
  marginLeft: rem(7),
}));
