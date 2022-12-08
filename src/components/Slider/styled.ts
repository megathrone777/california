import { styled } from "~/theme";

import { Swiper } from "swiper/react";

export const StyledWrapper = styled(Swiper)`
  ${({ theme: { colors, rem } }): string => `
    background-color: ${colors.greenLight};
    border-radius: ${rem(30)};
    overflow: hidden;
    height: ${rem(550)};
    margin-bottom: ${rem(75)};

    & .swiper-pagination {
      display: flex;
      justify-content: center;
      gap: ${rem(35)};
      position: absolute;
      bottom: ${rem(35)};
      left: 0;
      right: 0;
      width: 100%;
      z-index: 2;
    }

    & .swiper-pagination-bullet {
      width: ${rem(190)};
      height: ${rem(3)};
      display: block;
      background-color: black;
      cursor: pointer;

      &-active {
        background-color: tomato;
      }
    }
  `};
`;


