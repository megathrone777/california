import React, { useCallback, useEffect, useState } from "react";

import { Loader } from "~/components";
import { SearchSvg } from "~/icons";
import {
  StyledWrapper,
  StyledTitle,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledHints,
  StyledHintsList,
  StyledHintsButton,
} from "./styled";

const Search: React.FC = () => {
  const [hints, setHints] = useState<string[]>([]);
  const [selectedHints, setSelectedHints] = useState<string[]>([]);
  const [hintsLoading, toggleHintsLoading] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  const getHints = (): void => {
    fetch(`data/hints.json`)
      .then((response: Response) => response.json())
      .then((data: string[]): void => {
        setHints(data);
      })
      .catch((): void => {
        setHints([]);
      })
      .finally((): void => {
        toggleHintsLoading(false);
      });
  };

  const handleInputValue = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    const { value } = currentTarget;

    setInputValue(value);
  };

  const handleHintClick = useCallback(
    ({ currentTarget }: React.SyntheticEvent<HTMLButtonElement>): void => {
      const { value } = currentTarget;

      setSelectedHints((prevHints: string[]): string[] => {
        if (prevHints.includes(value)) return prevHints;

        return [...prevHints, value];
      });
    },
    []
  );

  useEffect((): void => {
    const hintsValue = selectedHints.join(" ");

    setInputValue(hintsValue);
  }, [selectedHints]);

  useEffect((): void => {
    getHints();
  }, []);

  return (
    <StyledWrapper>
      <StyledTitle>Looking for anything else?</StyledTitle>

      <StyledForm action="#">
        <StyledInput
          onChange={handleInputValue}
          placeholder="Search keyword"
          type="text"
          value={inputValue}
        />

        <StyledButton type="submit">
          <SearchSvg />
        </StyledButton>
      </StyledForm>

      <StyledHints>
        {hints && !!hints.length && (
          <StyledHintsList>
            {hints.map(
              (hint: string, index: number): React.ReactElement => (
                <li key={`${hint}-${index}`}>
                  <StyledHintsButton
                    isActive={selectedHints.includes(hint)}
                    onClick={handleHintClick}
                    value={hint}
                  >
                    {hint}
                  </StyledHintsButton>
                </li>
              )
            )}
          </StyledHintsList>
        )}

        {hintsLoading && <Loader />}
      </StyledHints>
    </StyledWrapper>
  );
};

export { Search };
