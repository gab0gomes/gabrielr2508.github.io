import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialLinksWrapper = styled.nav`
  margin: 3rem auto;
  width: 100%;

  ${media.lessThan('small')`
    margin: 1rem auto;
  `};
`;

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;

  .horizontal & {
    flex-direction: row;
    justify-content: space-between;
    width: 10rem;
  }
`;

export const SocialLinksItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  
  .horizontal & {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
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
