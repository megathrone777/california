import React, { useCallback, useState, useEffect } from "react";

import { TProps } from "./types";
import { StyledButton, StyledItem, StyledList, StyledWrapper } from "./styled";

const Hints: React.FC<TProps> = ({ onSelect }) => {
  const [hints, setHints] = useState<string[]>([]);

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
        // toggleLoading(false);
      });
  };

  const handleButtonClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>): void => {
      onSelect(event.currentTarget.textContent);
    },
    []
  );

  useEffect((): void => {
    getHints();
  }, []);

  return (
    <StyledWrapper>
      {hints && !!hints.length && (
        <StyledList>
          {hints.map(
            (hint: string, index: number): React.ReactElement => (
              <StyledItem key={`${hint}-${index}`}>
                <StyledButton type="button" onClick={handleButtonClick}>
                  {hint}
                </StyledButton>
              </StyledItem>
            )
          )}
        </StyledList>
      )}
    </StyledWrapper>
  );
};

export { Hints };
