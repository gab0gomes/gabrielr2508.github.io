import styled from 'styled-components';
import media from  'styled-media-query';
import Img from 'gatsby-image';

export const AboutPage = styled.section`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 4rem);
  padding: 3rem max(3rem, calc((100vw - 860px) / 2));
  color: var(--texts);

  ${media.lessThan('large')`
    width: 100%;
  `};
`;

export const AboutImage = styled(Img)`
  min-width: 12rem;
  width: 50%;
  margin-top: 3rem;
`;

export const AboutTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const AboutText = styled.p`
  margin-top: 1rem;
  color: var(--postColor);
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.7;
  letter-spacing: 0.069rem;
  padding: 0;

  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.8;
    }
  }
`;