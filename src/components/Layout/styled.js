import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `};
`;

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  transition: background, color 0.5s;
  width: 100%;
  display: flex;
  margin-left: var(--menuBarWidth);

  ${media.lessThan('large')`
    margin-left: 0;
    margin-top: var(--menuBarWidth);
  `};
`;
