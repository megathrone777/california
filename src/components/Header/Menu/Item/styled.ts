import { styled } from "~/theme";

export const StyledWrapper = styled.li`
  /* ${({ theme: { rem } }): string => `
    font-size: ${rem(20)};
  `}; */
`;

export const StyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: black;

  &:hover {
    opacity: 0.7;
  }
`;