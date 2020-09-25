import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialLinksWrapper = styled.nav`
  margin: 3rem auto;
  width: 100%;

  ${media.lessThan('large')`
    display: none;
  `};
`;

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
`;

export const SocialLinksItem = styled.li`
  margin-bottom: 1rem;
`;

export const SocialLinksLink = styled.a`
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
