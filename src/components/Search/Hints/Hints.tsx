import React, { useCallback, useState, useEffect } from "react";

import { Loader } from "~/components";
import { TProps } from "./types";
import { StyledButton, StyledList, StyledWrapper } from "./styled";

const Hints: React.FC<TProps> = ({ onSelect }) => {
  const [selectedHints, setSelectedHints] = useState<string[]>([]);
  const [hints, setHints] = useState<string[]>([]);
  const [hintsLoading, toggleHintsLoading] = useState<boolean>(true);

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

  const handleButtonClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>): void => {
      const { value } = event.currentTarget;

      setSelectedHints((prevHints: string[]): string[] => {
        if (prevHints.includes(value)) return prevHints;

        return [...prevHints, value];
      });
    },
    []
  );

  useEffect((): void => {
    onSelect(selectedHints);
  }, [selectedHints]);

  useEffect((): void => {
    getHints();
  }, []);

  return (
    <StyledWrapper>
      {hints && !!hints.length && (
        <StyledList>
          {hints.map(
            (hint: string, index: number): React.ReactElement => (
              <li key={`${hint}-${index}`}>
                <StyledButton
                  isActive={selectedHints.includes(hint)}
                  type="button"
                  onClick={handleButtonClick}
                  value={hint}
                >
                  {hint}
                </StyledButton>
              </li>
            )
          )}
        </StyledList>
      )}

      {hintsLoading && <Loader />}
    </StyledWrapper>
  );
};

export { Hints };
