import React from "react";

import { TProps } from "./types";
import {
  StyledWrapper,
  StyledName,
  StyledDescription,
  StyledImage,
  StyledMedia,
  StyledPrice,
} from "./styled";

const Item: React.FC<TProps> = ({ imageUrl, name, description, price }) => (
  <StyledWrapper>
    <StyledMedia>
      <StyledImage src={imageUrl} alt={name} />
    </StyledMedia>
    <StyledName>{name}</StyledName>
    <StyledDescription>{description}</StyledDescription>
    <StyledPrice>$ {price} USD</StyledPrice>
  </StyledWrapper>
);

export { Item };
