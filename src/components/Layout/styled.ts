import { styled } from "~/theme";

export const StyledContent = styled.main``;

export const StyledWrapper = styled.div`
  ${({ theme: { rem } }): string => `
    max-width: ${rem(1300)};
    margin-inline: auto;
  `};
`;
