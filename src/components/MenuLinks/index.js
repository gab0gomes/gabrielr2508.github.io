import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import links from './content';
import getThemeColors from '../../utils/getThemeColors';

const MenuLinks = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1170px)'
  });

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {
          links.map((link, i) => {
            if (isDesktopOrLaptop && link.url === '/search/') {
              return;
            }

            return (<S.MenuLinksItem key={ i }>
              <S.MenuLinksLink
                cover
                direction="left"
                bg={getThemeColors()}
                duration={0.6}
                to={ link.url }
                activeClassName="active"
              >
                { link.label }
              </S.MenuLinksLink>
            </S.MenuLinksItem>);
          })
        }
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
};

export default MenuLinks;
