import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  keyframes,
  styled,
  ThemeProps,
} from "~/theme";

const spin = keyframes`
  from {
    transform: translateY(-50%) rotate(0deg);
  }

  to {
    transform: translateY(-50%) rotate(360deg);
  }
`;

export const StyledContent = styled.div`
  ${({
    theme: { colors, rem },
  }): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
    animation: ${spin} 0.5s linear infinite;
    border-radius: 50%;
    border: ${rem(10)} solid ${colors.greenLight};
    border-top-color: transparent;
    height: ${rem(60)};
    left: 0;
    margin-inline: auto;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: ${rem(60)};
  `};
`;
