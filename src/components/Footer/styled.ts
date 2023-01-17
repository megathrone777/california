import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { colors, rem } }) => ({
  height: rem(380),
  backgroundColor: colors.grayLightest,
}));

export const StyledLayout = styled("div")(({ theme: { rem } }) => ({
  marginInline: "auto",
  maxWidth: rem(1300),
}));

export const StyledContent = styled("div")(({ theme: { rem } }) => ({
  display: "flex",
  paddingBlock: rem(45),
}));

export const StyledCopyright = styled("div")({});

export const StyledContentLogo = styled("div")(({ theme: { rem } }) => ({
  maxWidth: rem(370),
  paddingLeft: rem(70),
}));

export const StyledContentMenu = styled("div")({
  display: "flex",
  flex: "0 1 100%",
  justifyContent: "space-around",
  width: "100%",
});

export const StyledContentLogoMedia = styled("div")(({ theme: { rem } }) => ({
  marginBottom: rem(20),
}));

export const StyledContentLogoText = styled("div")(({ theme: { rem } }) => ({
  color: "black",
  fontSize: rem(16),
  lineHeight: rem(19),
}));

export const StyledContentMenuColumn = styled("div")({});

export const StyledContentMenuTitle = styled("div")(({ theme: { fonts, rem } }) => ({
  fontFamily: fonts.fontReadex,
  fontSize: rem(22),
  marginBottom: rem(20),
}));

export const StyledContentMenuInner = styled("div")({});

export const StyledContentMenuInnerList = styled("ul")({});

export const StyledContentMenuInnerItem = styled("div")(({ theme: { rem } }) => ({
  marginBottom: rem(15),
}));

export const StyledContentMenuInnerLink = styled("a")({
  textDecoration: "none",
  color: "black",
});
