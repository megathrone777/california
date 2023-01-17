import React, { useEffect, useState } from "react";

import { Loader } from "~/components";
import { Item } from "./Item";
import { TCategory } from "./Item/types";
import { StyledWrapper, StyledTitle, StyledText, StyledList } from "./styled";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [categoriesLoading, toggleCategoriesLoading] = useState<boolean>(true);

  const getCategories = (): void => {
    fetch("data/categories.json")
      .then((response: Response): Promise<TCategory[]> => response.json())
      .then((data: TCategory[]): void => {
        setCategories(data);
      })
      .catch((): void => {
        setCategories([]);
      })
      .finally((): void => {
        toggleCategoriesLoading(false);
      });
  };

  useEffect((): void => {
    getCategories();
  }, []);

  return (
    <StyledWrapper>
      <StyledTitle>See the best around here</StyledTitle>
      <StyledText>
        Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
      </StyledText>

      {categories && !!categories.length && (
        <StyledList>
          {categories.map(
            ({ id, ...rest }: TCategory): React.ReactElement => (
              <Item key={id} {...{ id }} {...rest} />
            )
          )}
        </StyledList>
      )}

      {categoriesLoading && <Loader />}
    </StyledWrapper>
  );
};

export { Categories };
