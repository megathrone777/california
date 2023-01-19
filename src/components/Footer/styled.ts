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

export const StyledContentLogo = styled("div")(({ theme: { rem } }) => ({
  maxWidth: rem(370),
  padding: `0 ${rem(40)} 0 ${rem(25)}`,
}));

export const StyledContentMenu = styled("div")(({ theme: { rem } }) => ({
  display: "flex",
  flex: "0 1 100%",
  justifyContent: "space-around",
  width: "100%",
  paddingRight: rem(75),
}));

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

export const StyledCopyright = styled("div")({});

export const StyledCopyrightMedia = styled("div")({});

export const StyledCopyrightContent = styled("div")(({ theme: { rem } }) => ({
  marginTop: rem(50),
  display: "flex",
  justifyContent: "space-between",
  paddingInline: rem(30),
}));

export const StyledCopyrightContentLeft = styled("div")(
  ({ theme: { fonts, rem } }) => ({
    display: "flex",
    fontFamily: fonts.fontReadex,
    fontSize: rem(18),
    lineHeight: rem(22),

    p: {
      fontFamily: fonts.fontInter,
      marginLeft: rem(5),
    },
  })
);

export const StyledCopyrightContentMedia = styled("button")(
  ({ theme: { rem } }) => ({
    marginLeft: rem(7),
  })
);

export const StyledCopyrightContentMediaLink = styled("a")({});

export const StyledCopyrightContentRight = styled("div")(
  ({ theme: { fonts, rem } }) => ({
    display: "flex",
    fontFamily: fonts.fontReadex,
    fontSize: rem(18),
    lineHeight: rem(22),

    p: {
      fontFamily: fonts.fontInter,
      marginLeft: rem(5),
    },
  })
);
