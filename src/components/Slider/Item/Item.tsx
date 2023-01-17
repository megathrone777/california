import React from "react";

import { TProps } from "./types";
import {
  StyledWrapper,
  StyledContent,
  StyledTitle,
  StyledText,
  StyledButton,
} from "./styled";

const Item: React.FC<TProps> = ({ description, imageURL, title }) => (
  <StyledWrapper>
    <StyledContent>
      {title && <StyledTitle>{title}</StyledTitle>}

      {description && (
        <StyledText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est
          dui, aliquam, tempor. Faucibus morbi turpis.
        </StyledText>
      )}

      <StyledButton type="button">Explore</StyledButton>
    </StyledContent>

    <div>
      <img alt={title} src={`images/${imageURL}`} />
    </div>
  </StyledWrapper>
);

export { Item };
