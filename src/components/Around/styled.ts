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

export const StyledLayout = styled.div`
  ${({ theme: { rem } }): string => `
    height: ${rem(455)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${rem(75)};
  `};
`;

export const StyledItem = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${rem(415)};
    padding-top: ${rem(40)};
    background-color: #F8F9FA;
    border-radius: ${rem(15)};
  `};
`;

export const StyledItemTitle = styled.h2`
  ${({ theme: { rem, fonts } }): string => `
    color: black;
    font-family: ${fonts.fontReadex};
    font-size: ${rem(13)};
    line-height: ${rem(17)};
  `};
`;

export const StyledItemText = styled.p`
  ${({ theme: { rem, fonts } }): string => `
    color: black;
    font-family: ${fonts.fontReadex};
    font-size: ${rem(28)};
    line-height: ${rem(35)};
    margin-bottom: ${rem(30)};
  `};
`;

export const StyledButton = styled.button`
  ${({ theme: { rem } }): string => `
    font-size: ${rem(18)};
    border-radius: ${rem(200)};
    height: ${rem(50)};
    border: ${rem(1)} solid black;
    min-width: ${rem(170)};
    padding-inline: ${rem(5)};
    margin-bottom: ${rem(30)};
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
    transition-property: background-color, color;
    
    &:hover {
      background-color: black;
      color: white;
    }
  `};
`;

export const StyledItemMedia = styled.div``;

export const StyledItemImage = styled.img`
  height: 100%;
`;