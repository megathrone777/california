import { styled } from "~/theme";

export const StyledWrapper = styled("div")({});

export const StyledTitle = styled("h2")(({ theme: { fonts, rem } }) => ({
  color: "black",
  fontFamily: fonts.fontReadex,
  fontSize: rem(42),
  lineHeight: rem(52),
  marginBottom: rem(25),
  textAlign: "center",
}));

export const StyledForm = styled("form")(({ theme: { rem } }) => ({
  maxWidth: rem(650),
  height: rem(60),
  marginInline: "auto",
  position: "relative",
  marginBottom: rem(20),
}));

export const StyledInput = styled("input")(
  ({ theme: { colors, placeholder, rem } }) => ({
    width: "100%",
    height: "100%",
    fontSize: rem(14),
    borderRadius: rem(100),
    border: `${rem(1)} solid ${colors.grayLighter}`,
    backgroundColor: colors.grayLightest,
    paddingInline: rem(65),

    ":focus": {
      borderColor: "black",

      ...placeholder({
        color: "transparent",
      }),
    },

    ...placeholder({
      color: "black",
      fontSize: rem(14),
    }),
  })
);

export const StyledButton = styled("button")(({ theme: { rem } }) => ({
  position: "absolute",
  top: `calc(50% - ${rem(15)})`,
  left: rem(20),
  width: rem(30),
}));

export const StyledHints = styled("div")(({ theme: { devices, rem } }) => ({
  margin: `0 auto ${rem(70)}`,
  maxWidth: rem(650),
  minHeight: rem(87),
  position: "relative",

  [devices["desktop"]]: {
    marginBottom: rem(50),
  },
}));

export const StyledHintsList = styled("ul")(({ theme: { rem } }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: rem(7),
  justifyContent: "center",
}));

export const StyledHintsButton = styled("button")<{ isActive: boolean }>(
  ({ isActive, theme: { colors, rem } }) => ({
    height: rem(40),
    fontSize: rem(14),
    lineHeight: rem(17),
    paddingInline: rem(22),
    borderRadius: rem(200),
    border: `${rem(1)} solid ${isActive ? "black" : colors.grayLighter}`,

    ":hover": {
      borderColor: "black",
    },
  })
);
