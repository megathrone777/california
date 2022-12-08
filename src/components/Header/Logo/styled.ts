import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  ${({ theme: { rem } }): string => `
    font-size: ${rem(20)};
  `};
`;

export const StyledLink = styled.a`
  ${({ theme: { rem } }): string => `
    font-size: ${rem(20)};
  `};
`;