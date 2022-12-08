import { styled } from "~/theme";

import { fonts } from "~/theme/variables";

export const StyledLayout = styled.div`
  ${({ theme: { rem } }): string => `
    margin-bottom: ${rem(80)};
  `};
`;

export const StyledWrapper = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    height: ${rem(800)};
    justify-content: space-between;
  `};
`;

export const StyledTitle = styled.h2`
  ${({ theme: { rem } }): string => `
    color: black;
    font-family: ${fonts.fontReadex};
    font-size: ${rem(42)};
    line-height: ${rem(53)};
    margin-bottom: ${rem(10)};
    text-align: center;
  `};
`;

export const StyledText = styled.p`
  ${({ theme: { rem } }): string => `
    color: black;
    font-family: ${fonts.fontReadex};
    font-size: ${rem(14)};
    line-height: ${rem(17)};
    margin: 0 auto ${rem(55)};
    max-width: ${rem(630)};
    text-align: center;
  `};
`;

export const StyledContent = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    flex-basis: ${rem(640)};
    flex-direction: column;
    justify-content: space-between;
    gap: ${rem(70)};
  `};
`;

export const StyledColumn = styled.div`
  ${({ theme: { rem } }): string => `
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: ${rem(40)};
    max-width: ${rem(310)};
    box-shadow: 0px ${rem(4)} ${rem(35)} ${rem(0)} rgba(0,0,0,0.25);
  `};
`;

export const StyledItem = styled.div`
  ${({ theme: { rem } }): string => `
    padding-left: ${rem(40)};
    max-width: ${rem(640)};
    box-shadow: 0px ${rem(4)} ${rem(35)} ${rem(0)} rgba(0,0,0,0.25);
  `};
`;

export const StyledItemDown = styled.div`
  ${({ theme: { rem } }): string => `
    padding-left: ${rem(40)};
    height: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0px ${rem(4)} ${rem(35)} ${rem(0)} rgba(0,0,0,0.25);
  `};
`;

export const StyledColumnTitle = styled.h2`
  ${({ theme: { rem } }): string => `
    color: black;
    font-family: ${fonts.fontReadex};
    font-size: ${rem(15)};
    line-height: ${rem(19)};
    text-align: center;
  `};
`;

export const StyledItemInfo = styled.div`
  ${({ theme: { rem } }): string => `
    color: black;
    font-family: ${fonts.fontReadex};
    padding-right: ${rem(40)};
    text-align: right;
  `};
`;

export const StyledContentTitle = styled.h2`
  ${({ theme: { rem } }): string => `
    font-size: ${rem(15)};
    line-height: ${rem(19)};
  `};
`;

export const StyledContentText = styled.p`
  ${({ theme: { rem } }): string => `
    font-size: ${rem(32)};
    line-height: ${rem(38)};
  `};
`;

export const StyledColumnText = styled.p`
  ${({ theme: { rem } }): string => `
    color: black;
    font-family: ${fonts.fontReadex};
    font-size: ${rem(32)};
    line-height: ${rem(38)};
    text-align: center;
  `};
`;

export const StyledContentMedia = styled.img`
  height: 100%;
`;

export const StyledColumnImage = styled.div`
  ${({ theme: { rem } }): string => `
    padding-left: ${rem(15)};
  `};
`;

export const StyledItemImage = styled.div`
  ${({ theme: { rem } }): string => `
    height: ${rem(377)};
    text-align: left;
    width: 100%;
  `};
`;

export const StyledItemDownImage = styled.div`
  height: 100%;
  text-align: left;
`;

export const StyledColumnInfo = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    flex-direction: column;
    width: ${rem(250)};
  `};
`;
