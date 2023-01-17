import React from "react";

import { TProps } from "./types";
import {
  StyledWrapper,
  StyledTitle,
  StyledSubtitle,
  StyledHelper,
  StyledButton,
  StyledMedia,
} from "./styled";

const Item: React.FC<TProps> = ({ imageURL, title, subtitle }) => (
  <StyledWrapper>
    {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    {title && <StyledTitle>{title}</StyledTitle>}

    <StyledHelper>
      <StyledButton type="button">Explore</StyledButton>
    </StyledHelper>

    {imageURL && (
      <StyledMedia>
        <img alt={title} src={`images/${imageURL}`} />
      </StyledMedia>
    )}
  </StyledWrapper>
);

export { Item };
