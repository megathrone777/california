import { css, styled } from "~/theme";

const shadowStyles = css(({ theme: { rem } }) => ({
  "::before": {
    bottom: 0,
    boxShadow: `0 ${rem(4)} ${rem(35)} 0 rgba(0, 0, 0, 0.25)`,
    content: '""',
    display: "block",
    height: "100%",
    left: 0,
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
    zIndex: 1,
  },
}));

export const StyledWrapper = styled("div")(({ theme: { rem } }) => ({
  display: "flex",
  height: rem(800),
  justifyContent: "space-between",
}));

export const StyledLayout = styled("div")(({ theme: { rem } }) => ({
  marginBottom: rem(80),
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
  fontSize: rem(14),
  lineHeight: rem(17),
  margin: `0 auto ${rem(55)}`,
  maxWidth: rem(630),
  textAlign: "center",
}));

export const StyledContent = styled("div")(({ theme: { rem } }) => ({
  display: "flex",
  flexBasis: rem(640),
  flexDirection: "column",
  gap: rem(70),
  justifyContent: "space-between",
}));

export const StyledColumn = styled("div")(
  ({ theme: { rem } }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: rem(40),
    justifyContent: "center",
    maxWidth: rem(310),
    position: "relative",
  }),
  shadowStyles
);

export const StyledItem = styled("div")(
  ({ theme: { rem } }) => ({
    paddingLeft: rem(40),
    position: "relative",
  }),
  shadowStyles
);

export const StyledItemDown = styled("div")<{ isVisible: boolean }>(
  ({ isVisible, theme: { rem } }) => ({
    alignItems: "center",
    display: "flex",
    height: "100%",
    paddingLeft: rem(40),
    position: "relative",
    transform: `translateY(${isVisible ? 0 : rem(30)})`,
    transitionDelay: "1s",
    transition: "transform 0.7s ease-in-out",
  }),
  shadowStyles
);

export const StyledColumnTitle = styled("h2")(({ theme: { fonts, rem } }) => ({
  color: "black",
  fontFamily: fonts.fontReadex,
  fontSize: rem(15),
  lineHeight: rem(19),
}));

export const StyledItemInfo = styled("div")(({ theme: { fonts, rem } }) => ({
  color: "black",
  fontFamily: fonts.fontReadex,
  paddingRight: rem(40),
  textAlign: "right",
}));

export const StyledContentTitle = styled("h2")(({ theme: { rem } }) => ({
  fontSize: rem(15),
  lineHeight: rem(19),
}));

export const StyledContentText = styled("p")(({ theme: { rem } }) => ({
  fontSize: rem(32),
  lineHeight: rem(38),
}));

export const StyledColumnText = styled("p")(({ theme: { fonts, rem } }) => ({
  color: "black",
  fontFamily: fonts.fontReadex,
  fontSize: rem(32),
  lineHeight: rem(32),
  textAlign: "center",
}));

export const StyledContentMedia = styled("img")({
  height: "100%",
});

export const StyledColumnImage = styled("div")(({ theme: { rem } }) => ({
  paddingLeft: rem(15),
}));

export const StyledItemImage = styled("div")(({ theme: { rem } }) => ({
  height: rem(377),
  textAlign: "center",
  width: "100%",
}));

export const StyledItemDownImage = styled("div")({
  height: "100%",
  textAlign: "center",
});

export const StyledColumnInfo = styled("div")(({ theme: { rem } }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  width: rem(250),
}));
