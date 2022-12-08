import { styled } from "~/theme";

export const StyledLayout = styled.div`
  /* display: flex;
  justify-content: space-between; */
`;

export const StyledWrapper = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    justify-content: space-between;
    // max-height: ${rem(800)};
  `};
`;

export const StyledTitle = styled.h2`
  ${({ theme: { rem } }): string => `
    font-family: "Readex";
    font-size: ${rem(42)};
    line-height: ${rem(52.5)};
    color: black;
    text-align: center;
    margin-bottom: ${rem(10)};
  `};
`;


export const StyledText = styled.p`
  ${({ theme: { rem } }): string => `
    font-family: "Readex";
    font-size: ${rem(14)};
    line-height: ${rem(16.8)};
    color: black;
    text-align: center;
    margin: 0 auto ${rem(55)};
    max-width: ${rem(630)};
  `};
`;

export const StyledContent = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    flex-direction: column;
    gap: ${rem(70)};
    max-height: 600px;
    flex-basis: ${rem(640)};
    // align-self: baseline;
  `};
`;

export const StyledColumn = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    flex-direction: column;
    gap: ${rem(40)};
    align-items: center;
    max-width: ${rem(310)};
    height: ${rem(800)};
    padding-block: ${rem(145)};
    background-color: gray;
  `};
`;

export const StyledItem = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: ${rem(640)};
    padding-block: ${rem(145)};
    background-color: gray;
  `};
`;

export const StyledItemDown = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    justify-content: center;
    max-width: ${rem(640)};
    padding-left: ${rem(40)};
    background-color: gray;
  `};
`;

export const StyledContentTitle = styled.h2`
  ${({ theme: { rem } }): string => `
    font-family: "Readex";
    font-size: ${rem(15)};
    line-height: ${rem(19)};
    color: black;
    text-align: right;
    padding-right: ${rem(42)};
  `};
`;

export const StyledColumnTitle = styled.h2`
  ${({ theme: { rem } }): string => `
    font-family: "Readex";
    font-size: ${rem(15)};
    line-height: ${rem(19)};
    color: black;
    text-align: center;
  `};
`;

export const StyledContentText = styled.p`
  ${({ theme: { rem } }): string => `
    font-family: "Readex";
    font-size: ${rem(32)};
    line-height: ${rem(38)};
    color: black;
    text-align: right;
    padding-right: ${rem(42)};
  `};
`;

export const StyledColumnText = styled.p`
  ${({ theme: { rem } }): string => `
    font-family: "Readex";
    font-size: ${rem(32)};
    line-height: ${rem(38)};
    color: black;
    text-align: center;
  `};
`;

export const StyledContentMedia = styled.img`
  width: 100%;
  overflow: hidden;
`;

export const StyledColumnImage = styled.div`
  ${({ theme: { rem } }): string => `
    padding-left: ${rem(15)};
  `};
`;

export const StyledItemImage = styled.div`

`;

export const StyledColumnInfo = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    flex-direction: column;
    width: ${rem(250)};
  `};
`;

export const StyledItemInfo = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    flex-direction: column;
    width: ${rem(250)};
    margin-top: ${rem(90)};
  `};
`;