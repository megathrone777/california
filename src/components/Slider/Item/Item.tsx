import React from "react";

import { StyledWrapper, StyledContent, StyledMedia,  StyledImage, StyledTitle, StyledText, StyledButton } from "./styled";

const Item: React.FC = () => (
  <StyledWrapper>
    <StyledContent>
      <StyledTitle>The new phones are here take a look.</StyledTitle>
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est
        dui, aliquam, tempor. Faucibus morbi turpis.
      </StyledText>
      <StyledButton type="button">Explore</StyledButton>
    </StyledContent>
    <StyledMedia>
      <StyledImage src="images/slider_img.png" alt="slider_img" />
    </StyledMedia>
  </StyledWrapper>
);

export { Item };
