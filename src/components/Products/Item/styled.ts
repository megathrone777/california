import { styled } from "~/theme";

export const StyledWrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: flex-end; */
    width: 25%;
    flex: 0 1 25%;
`;

export const StyledImage = styled.img``;

export const StyledMedia = styled.div`
  ${({ theme: { rem } }): string => `
    height: ${rem(215)};
    margin-bottom: ${rem(40)};
  `};
`;

export const StyledName = styled.p`
  ${({ theme: { rem, fonts } }): string => `
    font-family: ${fonts.fontReadex};
    font-size: ${rem(22)};
    line-height: ${rem(28)};
    white-space: nowrap;
    margin-bottom: ${rem(10)};
  `};
`;

export const StyledDescription = styled.p`
  ${({ theme: { rem } }): string => `
    font-size: ${rem(14)};
    line-height: ${rem(17)};
    min-height: ${rem(50)};
    width: ${rem(260)};
    margin-bottom: ${rem(25)};
  `};
`;

export const StyledPrice = styled.p`
  ${({ theme: { rem } }): string => `
    font-size: ${rem(18)};
    line-height: ${rem(22)};
  `};
`;


