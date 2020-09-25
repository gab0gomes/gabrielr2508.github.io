import React, { useState, useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { SearchAlt2 as Search } from '@styled-icons/boxicons-solid/SearchAlt2';
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt';

import { Grid } from '@styled-icons/boxicons-solid/Grid';
import { MenuAltLeft as Menu } from '@styled-icons/boxicons-regular/MenuAltLeft';

import * as S from './styled';

import SocialLinks from '../SocialLinks';
import getThemeColors from '../../utils/getThemeColors';

const MenuBar = ({ onMenuClick }) => {
  const {
    site: {
      siteMetadata: {
        title,
      }
    }
  } = useStaticQuery(
    graphql`
        query {
          site {
            siteMetadata {
              title,
            }
          }
        }
      `
  );

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Abrir o menu"
          onClick={onMenuClick}
          className="menu"
        >
          <Menu />
        </S.MenuBarItem>
        <S.MenuBarLink
          to="/"
          title="Voltar para Home"
          cover
          direction="right"
          bg={getThemeColors()}
          duration={0.6}
        >
          <S.MenuBarItem className="vertical">
            { title }
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
          <SocialLinks />
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

MenuBar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default MenuBar;
