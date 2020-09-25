import React from 'react';
import PropTypes from 'prop-types';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';
import ThemeButton from '../ThemeButton';

import * as S from './styled';

const Sidebar = ({ animation }) => {
  return (
    <S.SidebarWrapper className={animation}>
      <S.SidebarContent>
        <Profile />
        <SocialLinks />
        <MenuLinks />
        <ThemeButton />
      </S.SidebarContent>
      <S.SidebarOverlay />
    </S.SidebarWrapper>
  );
}

Sidebar.propTypes = {
  animation: PropTypes.string,
};

export default Sidebar;
