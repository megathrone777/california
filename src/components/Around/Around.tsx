import React from "react";

import {
  StyledWrapper,
  StyledTitle,
  StyledText,
  StyledLayout,
  StyledItem,
  StyledItemTitle,
  StyledItemText,
  StyledItemMedia,
  StyledItemImage,
  StyledButton
} from "./styled";

const Around: React.FC = () => (
  <StyledWrapper>
    <StyledTitle>See the best around here</StyledTitle>
    <StyledText>
      Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
    </StyledText>

    <StyledLayout>
      <StyledItem>
        <StyledItemTitle>Smart light bulb pack</StyledItemTitle>
        <StyledItemText>Latest and gratest</StyledItemText>
        <StyledButton type="button">Explore</StyledButton>
        <StyledItemMedia>
          <StyledItemImage src="images/around_img1.png" alt="around_img1" />
        </StyledItemMedia>
      </StyledItem>

      <StyledItem>
        <StyledItemTitle>Smart light bulb pack</StyledItemTitle>
        <StyledItemText>Best selling</StyledItemText>
        <StyledButton type="button">Explore</StyledButton>
        <StyledItemMedia>
          <StyledItemImage src="images/around_img2.png" alt="around_img2" />
        </StyledItemMedia>
      </StyledItem>

      <StyledItem>
        <StyledItemTitle>Smart light bulb pack</StyledItemTitle>
        <StyledItemText>Every product</StyledItemText>
        <StyledButton type="button">Explore</StyledButton>
        <StyledItemMedia>
          <StyledItemImage src="images/around_img3.png" alt="around_img3" />
        </StyledItemMedia>
      </StyledItem>
    </StyledLayout>
  </StyledWrapper>
);

export { Around };
