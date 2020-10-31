import styled from 'styled-components';
import media from 'styled-media-query';

export const FooterWrapper = styled.footer`
  z-index: 10;
  display: flex;
  position: fixed;
  bottom: 0;
  border-top: 1px solid var(--light-blue);
  background-color: var(--background);
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  padding: 0 max(3rem, calc((var(--postWidth) - 960px + 12rem) / 2));

  ${media.lessThan('large')`
    padding: 0 max(3rem, calc((100% - 960px + 12rem) / 2));
  `};
`;

export const FooterAuthor = styled.div`
  color: var(--texts);
`;

export const FooterScrollTopButton = styled.button`
  border: 0;
  border-left: 1px solid var(--light-blue);
  border-right: 1px solid var(--light-blue);
  color: var(--texts);
  width: 3rem;
  height: 100%;
  cursor: pointer;
  display: block;
  transition: color 0.5s;
  background-color: var(--background);

  &:hover {
    color: var(--highlight);
  }
`;