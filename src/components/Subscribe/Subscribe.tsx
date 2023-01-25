import React from "react";

import {
  StyledText,
  StyledTitle,
  StyledWrapper,
  StyledMedia,
  StyledForm,
  StyledInput,
  StyledButton,
} from "./styled";

const Subscribe: React.FC = () => (
  <StyledWrapper>
    <StyledTitle>Never miss a thing</StyledTitle>
    <StyledText>
      Sign up for texts to be notified about our best offers on the perfect gifts.
    </StyledText>

    <StyledMedia>
      <img alt="Subscribe image." src="images/subscribe_img.png" />
    </StyledMedia>

    <StyledForm>
      <StyledInput placeholder="Email" type="text" />
      <StyledButton type="submit">Sign Up</StyledButton>
    </StyledForm>
  </StyledWrapper>
);

export { Subscribe };
