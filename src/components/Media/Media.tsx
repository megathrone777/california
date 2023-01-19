import React, { useEffect, useState } from "react";

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
  StyledItemDownImage,
} from "./styled";

const Media: React.FC = () => {
  const [isVisible, toggleVisible] = useState<boolean>(false);

  useEffect((): void => {
    window.addEventListener("scroll", (): void => {
      if (window.scrollY > 800) {
        toggleVisible(true);

        return;
      }

      if (window.scrollY === 0) {
        toggleVisible(false);

        return;
      }
    });
  }, []);

  return (
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

          <StyledItemDown {...{ isVisible }}>
            <StyledItemDownImage>
              <StyledContentMedia alt="media_img1_2" src="images/media_img1_2.jpg" />
            </StyledItemDownImage>

            <StyledItemInfo>
              <StyledContentTitle>Watch</StyledContentTitle>
              <StyledContentText>Not just stylisht</StyledContentText>
            </StyledItemInfo>
          </StyledItemDown>
        </StyledContent>

        <StyledColumn>
          <StyledColumnImage>
            <StyledContentMedia alt="media_img2" src="images/media_img2.jpg" />
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

          <div>
            <StyledContentMedia alt="media_img3" src="images/media_img3.jpg" />
          </div>
        </StyledColumn>
      </StyledWrapper>
    </StyledLayout>
  );
};

export { Media };
