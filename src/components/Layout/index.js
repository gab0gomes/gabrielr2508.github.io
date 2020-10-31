import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
