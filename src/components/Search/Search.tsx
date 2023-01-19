import React, { useState } from "react";

import { SearchSvg } from "~/icons";

import { Hints } from "./Hints";

import {
  StyledWrapper,
  StyledTitle,
  StyledForm,
  StyledInput,
  StyledButton,
} from "./styled";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputValue = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    setInputValue(event.currentTarget.value);
  };

  const handleHintSelect = (hint: string | null): void => {
    if (hint) {
      setInputValue((prevState: string): string => `${prevState} ${hint}`);
    }
  };

  return (
    <StyledWrapper>
      <StyledTitle>Looking for anything else?</StyledTitle>

      <StyledForm>
        <StyledInput
          type="text"
          placeholder="Search keyword"
          value={inputValue}
          onChange={handleInputValue}
        />

        <StyledButton type="submit">
          <SearchSvg />
        </StyledButton>
      </StyledForm>

      <Hints onSelect={handleHintSelect} />
    </StyledWrapper>
  );
};

export { Search };
