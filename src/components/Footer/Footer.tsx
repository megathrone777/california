import React, { useEffect, useState } from "react";

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
  StyledCopyrightMedia,
  StyledCopyrightContent,
  StyledCopyrightContentLeft,
  StyledCopyrightContentRight,
  StyledCopyrightContentMedia,
  StyledCopyrightContentMediaLink,
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
                ({ id, items, title }: TFooterItem): React.ReactElement => (
                  <StyledContentMenuColumn key={id}>
                    <StyledContentMenuTitle>{title}</StyledContentMenuTitle>

                    <StyledContentMenuInner>
                      <StyledContentMenuInnerList>
                        {items.map(
                          ({ title: menuTitle }): React.ReactElement => (
                            <StyledContentMenuInnerItem key={`${id}-menu-item`}>
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

        <StyledCopyright>
          <StyledCopyrightMedia>
            <img src="images/divider_footer_img.png" alt="footer_divider_img" />
          </StyledCopyrightMedia>

          <StyledCopyrightContent>
            <StyledCopyrightContentLeft>
              Made By:<p>Azwedo</p>
              <StyledCopyrightContentMedia type="button">
                <StyledCopyrightContentMediaLink href="#">
                  <img
                    src="images/copyright_arrow_img.png"
                    alt="copyright_arrow_img"
                  />
                </StyledCopyrightContentMediaLink>
              </StyledCopyrightContentMedia>
            </StyledCopyrightContentLeft>

            <StyledCopyrightContentRight>
              Powered by:<p>Webflow</p>
              <StyledCopyrightContentMedia type="button">
                <img
                  src="images/copyright_arrow_img.png"
                  alt="copyright_arrow_img"
                />
              </StyledCopyrightContentMedia>
            </StyledCopyrightContentRight>
          </StyledCopyrightContent>
        </StyledCopyright>
      </StyledLayout>
    </StyledWrapper>
  );
};

export { Footer };
