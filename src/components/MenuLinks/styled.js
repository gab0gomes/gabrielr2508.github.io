import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

export const MenuLinksWrapper = styled.nav`
`;

export const MenuLinksList = styled.ul`
  font-size: 1.5rem;
  font-weight: 400;

  ${media.lessThan('small')`
    font-size: 1rem;
  `};
`;

export const MenuLinksItem = styled.li`
  :not(:last-child) {
    padding: 0 0 1rem 0;
  }

  .active {
    color: var(--highlight);
    font-weight: 500;
  }
`;

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;