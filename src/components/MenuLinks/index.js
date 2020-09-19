import React from 'react';

import * as S from './styled';
import links from './content';
import getThemeColors from '../../utils/getThemeColors';

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      { links.map((link, i) => (
        <S.MenuLinksItem key={ i }>
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
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
