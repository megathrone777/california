import { styled } from "~/theme";

export const StyledArrow = styled.button`
  ${({ theme: { rem } }): string => `
      width: ${rem(12)};
      height: ${rem(24)};
      position: absolute;
      top: 50%;
      cursor: pointer;
      z-index:2;
      left: ${rem(20)};

      &:last-of-type {
        right: ${rem(20)};
        left: initial;
        transform: rotate(180deg);
      }
  `};
`;
