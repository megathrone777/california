import React from "react";

import {
  StyledLayout,
  StyledTitle,
  StyledText,
  StyledWrapper,
  StyledContent,
  StyledItem,
  StyledColumn,
  StyledContentMedia,
  StyledContentTitle,
  StyledContentText,
  StyledColumnTitle,
  StyledColumnText,
  StyledColumnInfo,
  StyledColumnImage,
  StyledItemImage,
  StyledItemInfo,
  StyledItemDown,
  StyledItemDownImage
} from "./styled";

const Media: React.FC = () => (
  <StyledLayout>
    <StyledTitle>Shop our latest offers and categories</StyledTitle>
    <StyledText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est
      dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </StyledText>

    <StyledWrapper>
      <StyledContent>
        <StyledItem>
          <StyledItemImage>
            <StyledContentMedia src="images/media_img1.jpg" alt="media_img1" />
          </StyledItemImage>

          <StyledItemInfo>
            <StyledContentTitle>Laptops</StyledContentTitle>
            <StyledContentText>
              True Laptop
              <br />
              Solution
            </StyledContentText>
          </StyledItemInfo>
        </StyledItem>

        <StyledItemDown>
          <StyledItemDownImage>
            <StyledContentMedia src="images/media_img1_2.jpg" alt="media_img1_2" />
          </StyledItemDownImage>

          <StyledItemInfo>
            <StyledContentTitle>Watch</StyledContentTitle>
            <StyledContentText>Not just stylisht</StyledContentText>
          </StyledItemInfo>
        </StyledItemDown>
      </StyledContent>

      <StyledColumn>
        <StyledColumnImage>
          <StyledContentMedia src="images/media_img2.jpg" alt="media_img2" />
        </StyledColumnImage>

        <StyledColumnInfo>
          <StyledColumnTitle>Phones</StyledColumnTitle>
          <StyledColumnText>Your day to day life</StyledColumnText>
        </StyledColumnInfo>
      </StyledColumn>

      <StyledColumn>
        <StyledColumnInfo>
          <StyledColumnTitle>Tablet</StyledColumnTitle>
          <StyledColumnText>Empower your work</StyledColumnText>
        </StyledColumnInfo>

        <StyledColumnImage>
          <StyledContentMedia src="images/media_img3.jpg" alt="media_img3" />
        </StyledColumnImage>
      </StyledColumn>
    </StyledWrapper>
  </StyledLayout>
);

export { Media };
