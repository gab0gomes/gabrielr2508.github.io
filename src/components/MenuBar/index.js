import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { MenuAltLeft as Menu } from '@styled-icons/boxicons-regular/MenuAltLeft';

import * as S from './styled';

import SocialLinks from '../SocialLinks';
import getThemeColors from '../../utils/getThemeColors';

import SearchButton from '../SearchButton';

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

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1170px)'
  });

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
          <S.MenuBarItem className={(isDesktopOrLaptop ? 'vertical' : 'horizontal')}>
            { title }
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        {
          isDesktopOrLaptop
          && <SocialLinks />
        }
      </S.MenuBarGroup>
      {
        document.location.pathname !== '/search'
        && <SearchButton />
      }
    </S.MenuBarWrapper>
  );
};

MenuBar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default MenuBar;
