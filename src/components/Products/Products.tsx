import React from "react";

import { Item } from "./Item";
import { StyledWrapper, StyledTitle, StyledText, StyledList } from "./styled";

const Products: React.FC = () => (
  <StyledWrapper>
    <StyledTitle>Save on our most selled items.</StyledTitle>
    <StyledText>
      Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
    </StyledText>

    <StyledList>
      <Item
        id="1"
        imageUrl="images/item_img1.jpg"
        name="MacBook Pro 13"
        description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
        price={1200}
      />
      <Item
        id="2"
        imageUrl="images/item_img2.jpg"
        name="Smart Galaxy Watch 3"
        description="Neque porro quisquam est qui dolorem ipsum quia dolor si velit...nsectetur, adipisci velit..."
        price={199}
      />
      <Item
        id="3"
        imageUrl="images/item_img3.jpg"
        name="MacBook Air M1"
        description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        price={1009}
      />
      <Item
        id="4"
        imageUrl="images/item_img4.jpg"
        name="iPad"
        description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        price={610}
      />
    </StyledList>
  </StyledWrapper>
);

export { Products };
