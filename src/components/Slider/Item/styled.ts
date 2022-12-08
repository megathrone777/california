import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const StyledContent = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: ${rem(55)};
    width: 50%;
    flex: 0 1 50%;
    align-items: flex-start;
  `};
`;

export const StyledTitle = styled.h2`
  ${({ theme: { rem } }): string => `
    font-family: 'Readex';
    font-size: 58px;
    line-height: 70px;
    margin-bottom: ${rem(30)};
  `};
`;

export const StyledText = styled.p`
  ${({ theme: { rem } }): string => `
    line-height: ${rem(19)};
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
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
    transition-property: background-color, color;
    
    &:hover {
      background-color: black;
      color: white;
    }
  `};
`;

export const StyledMedia = styled.div`
  
  /* justify-content: */
`;

export const StyledImage = styled.img`
  
  /* justify-content: */
`;

