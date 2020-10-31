import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt';

import * as S from './styled';

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterAuthor>
      © Gabriel Gomes - { (new Date().getFullYear()) }
    </S.FooterAuthor>
    <S.FooterScrollTopButton
      title="Ir para o topo"
      onClick={() => {
        scrollTo('#post-bar')}
      }
    >
      <Arrow />
    </S.FooterScrollTopButton>
  </S.FooterWrapper>
);

export default Footer;