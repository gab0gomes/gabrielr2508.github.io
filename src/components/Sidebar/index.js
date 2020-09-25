import React from 'react';
import PropTypes from 'prop-types';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';
import ThemeButton from '../ThemeButton';

import * as S from './styled';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
  }

  toggle() {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  }

  render() {
    return (
      <S.SidebarWrapper className={(this.state.isOpen ? 'slide' : '')}>
        <S.SidebarContent>
          <Profile />
          <MenuLinks
            onClick={() => {
              this.setState({ isOpen: false });
            }}
          />
          <ThemeButton />
        </S.SidebarContent>
        <S.SidebarOverlay
          onClick={() => {
            this.setState({ isOpen: false });
          }}
        />
      </S.SidebarWrapper>
    );
  }
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
};

export default Sidebar;
