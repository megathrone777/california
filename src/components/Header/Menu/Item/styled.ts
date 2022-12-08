import { styled } from "~/theme";

export const StyledWrapper = styled.li`
  /* ${({ theme: { rem } }): string => `
    font-size: ${rem(20)};
  `}; */
`;

export const StyledLink = styled.a`
  ${({ theme: { rem } }): string => `
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-size: ${rem(14)};

    &:hover {
      opacity: 0.7;
    }
  `}
`;