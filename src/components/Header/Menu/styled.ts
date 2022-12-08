import { styled } from "~/theme";

export const StyledWrapper = styled.div`
    /* ${({ theme: { rem } }): string => `
      font-size: ${rem(20)};
    `}; */
`;

export const StyledUl = styled.ul`
  ${({ theme: { rem } }): string => `
    display: flex;
    gap: ${rem(40)};
  `};
`;
