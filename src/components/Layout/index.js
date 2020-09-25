import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import GlobalStyles from '../../styles/global';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import * as S from './styled';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <S.LayoutWrapper>
        <GlobalStyles />
        <TransitionPortal level="top">
          <Sidebar
            ref="sidebar"
          />
          <MenuBar
            onMenuClick={() => {
              this.refs.sidebar.toggle();
            }}
          />
        </TransitionPortal>
        <S.LayoutMain>{this.props.children}</S.LayoutMain>
      </S.LayoutWrapper>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
