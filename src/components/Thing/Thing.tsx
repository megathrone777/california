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

const Thing: React.FC = () => (
  <StyledWrapper>
    <StyledTitle>Never miss a thing</StyledTitle>
    <StyledText>
      Sign up for texts to be notified about our best offers on the perfect gifts.
    </StyledText>

    <StyledMedia>
      <img src="images/thing_img.png" alt="thing_img" />
    </StyledMedia>
    <StyledForm>
      <StyledInput type="text" placeholder="Email" />
      <StyledButton type="submit">Sign Up</StyledButton>
    </StyledForm>
  </StyledWrapper>
);

export { Thing };
