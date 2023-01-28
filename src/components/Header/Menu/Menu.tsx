import React from "react";

import { Item } from "./Item";
import { TMenuItem } from "./Item/types";
import { TProps } from "./types";
import { StyledList, StyledWrapper } from "./styled";

const items: TMenuItem[] = [
  {
    id: "menu-item-1",
    text: "All Products",
  },
  {
    id: "menu-item-2",
    text: "Solutions",
  },
  {
    id: "menu-item-3",
    text: "About",
  },
  {
    id: "menu-item-4",
    text: "Support",
  },
];

const Menu: React.FC = () => (
  <StyledWrapper>
    {items && !!items.length && (
      <StyledList>
        {items.map(
          ({ id, text }: TMenuItem, index: number): React.ReactElement => (
            <Item key={`${id}-${index}`} text={text} />
          )
        )}
      </StyledList>
    )}
  </StyledWrapper>
);

export { Menu };
