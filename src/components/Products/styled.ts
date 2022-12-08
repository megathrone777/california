import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  ${({ theme: { rem } }): string => `
    margin-bottom: ${rem(75)};
  `};
`;

export const StyledTitle = styled.h2`
  ${({ theme: { rem, fonts} }): string => `
    color: black;
    font-family: ${fonts.fontReadex};
    font-size: ${rem(42)};
    line-height: ${rem(53)};
    margin-bottom: ${rem(10)};
    text-align: center;
  `};
`;

export const StyledText = styled.p`
  ${({ theme: { rem, fonts } }): string => `
    color: black;
    font-family: ${fonts.fontReadex};
    font-size: ${rem(13)};
    line-height: ${rem(17)};
    margin-bottom: ${rem(30)};
    text-align: center;
  `};
`;

export const StyledList = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    gap: ${rem(30)};
  `};
`;
