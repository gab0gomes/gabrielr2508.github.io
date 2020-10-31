import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--background);
  border-right: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: fixed;
  left: 0;
  width: var(--menuBarWidth);
  transition: background 0.5s;

  ${media.lessThan('large')`
    border-bottom: 1px solid var(--borders);
    border-right: none;
    flex-direction: row;
    height: var(--menuBarWidth);
    padding: 0;
    top: 0;
    width: 100%;
  `};
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    flex-direction: row;
  `};
`;

export const MenuBarLink = styled(AniLink)`
  display: block;
  text-decoration: none;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`;

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  padding: 1rem;
  position: relative;
  width: var(--menuBarWidth);
  transition: color 0.5s;

  ${media.lessThan("large")`
    height: var(--menuBarWidth);
    width: auto;
    &:hover {
      color: var(--highlight);
    }
  `}

  &.light {
    color: #ff9a3c;

    &:hover {
      color: #ffc93c;
    }
  }

  &:hover {
    color: var(--highlight);
  }

  &.vertical {
    writing-mode: vertical-rl;
    transform: scale(-1);
    height: auto;
    text-transform: uppercase;
    font-weight: 700;
    padding: 3rem 1rem;
    font-size: 1.5rem;
  }

  &.horizontal {
    height: var(--menuBarWidth);
    text-transform: uppercase;
    font-weight: 700;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    ${media.lessThan('small')`
      padding: 1rem 1rem;
    `};
  }

  &.menu {
    background-color: var(--guava-pink);
    color: var(--white);
    padding: .5rem 1rem;
    transition: background-color 0.5s;

    &:hover {
      color: var(--white);
      background-color: var(--dark);
    }

    ${media.lessThan('large')`
      height: var(--menuBarWidth);
      width: 5rem;
    `};
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }
`;
