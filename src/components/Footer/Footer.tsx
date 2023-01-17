import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

import { TFooterItem } from "./types";
import {
  StyledWrapper,
  StyledContent,
  StyledCopyright,
  StyledContentLogo,
  StyledLayout,
  StyledContentMenu,
  StyledContentLogoMedia,
  StyledContentLogoText,
  StyledContentMenuColumn,
  StyledContentMenuTitle,
  StyledContentMenuInner,
  StyledContentMenuInnerItem,
  StyledContentMenuInnerLink,
  StyledContentMenuInnerList,
} from "./styled";

const Footer: React.FC = () => {
  const [footerItems, setFooterItems] = useState<TFooterItem[]>([]);

  const getFooterItems = (): void => {
    fetch("data/footerData.json")
      .then((response: Response): Promise<TFooterItem[]> => response.json())
      .then((data: TFooterItem[]): void => {
        setFooterItems(data);
      })
      .catch((): void => {
        setFooterItems([]);
      })
      .finally((): void => {
        // toggleCategoriesLoading(false);
      });
  };

  console.log(footerItems);

  useEffect((): void => {
    getFooterItems();
  }, []);

  return (
    <StyledWrapper>
      <StyledLayout>
        <StyledContent>
          <StyledContentLogo>
            <StyledContentLogoMedia>
              <img src="images/header_logo.png" alt="footer_logo" />
            </StyledContentLogoMedia>
            <StyledContentLogoText>
              Sign up for texts to be notified about our best offers on the perfect
              gifts.
            </StyledContentLogoText>
          </StyledContentLogo>

          {footerItems && !!footerItems.length && (
            <StyledContentMenu>
              {footerItems.map(
                ({ items, title }: TFooterItem): React.ReactElement => (
                  <StyledContentMenuColumn key={v4()}>
                    <StyledContentMenuTitle>{title}</StyledContentMenuTitle>

                    <StyledContentMenuInner>
                      <StyledContentMenuInnerList>
                        {items.map(
                          ({ title: menuTitle }): React.ReactElement => (
                            <StyledContentMenuInnerItem key={v4()}>
                              <StyledContentMenuInnerLink href="#">
                                {menuTitle}
                              </StyledContentMenuInnerLink>
                            </StyledContentMenuInnerItem>
                          )
                        )}
                      </StyledContentMenuInnerList>
                    </StyledContentMenuInner>
                  </StyledContentMenuColumn>
                )
              )}
            </StyledContentMenu>
          )}
        </StyledContent>

        <StyledCopyright>Copyright</StyledCopyright>
      </StyledLayout>
    </StyledWrapper>
  );
};

export { Footer };
