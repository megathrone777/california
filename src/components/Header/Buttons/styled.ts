import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  ${({ theme: { rem } }): string => `
    display: flex;
    gap: ${rem(20)};
  `};
`;

export const StyledButton = styled.button`
  ${({ theme: { rem } }): string => `
    width: ${rem(24)};
    color: black;

    &:hover {
      opacity: 0.7;
    }
  `};
`;