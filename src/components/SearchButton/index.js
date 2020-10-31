import React from 'react';
import { SearchAlt2 as Search } from '@styled-icons/boxicons-solid/SearchAlt2';
import getThemeColors from '../../utils/getThemeColors';

import * as S from './styled';

const SearchButton = () => (
  <S.SearchButtonWrapper>
    <S.SearchButtonLink
      cover
      direction="right"
      bg={getThemeColors()}
      duration={0.6}
      to="/search"
      title="Pesquisar"
    >
      <S.IconWrapper>
        <Search />
      </S.IconWrapper>
    </S.SearchButtonLink>
  </S.SearchButtonWrapper>
);

export default SearchButton;
