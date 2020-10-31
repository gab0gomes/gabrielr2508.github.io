import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
`;

export const MenuLinksList = styled.ul`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const MenuLinksItem = styled.li`
  padding: 0 0 1rem 0;

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