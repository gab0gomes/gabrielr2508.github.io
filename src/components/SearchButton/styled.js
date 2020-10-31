import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const SearchButtonWrapper = styled.button`
  height: var(--menuBarWidth);
  width: var(--menuBarWidth);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  ${media.greaterThan('large')`
    display: none;
  `};
`;

export const SearchButtonLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 32px;
  height: 32px;
`;
