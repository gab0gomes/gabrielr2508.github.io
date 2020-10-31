import styled from 'styled-components';
import media from 'styled-media-query';

export const PostWrapper = styled.section`
  width: var(--postWidth);
  height: 100vh;
  overflow-y: scroll;
  border-left: 1px solid var(--light-blue);

  ${media.lessThan('large')`
    width: 100%;
  `}
`;

export const PostBar = styled.section`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-blue);
  padding: 0 max(3rem, calc((100% - 960px + 12rem) / 2));

  ${media.lessThan('small')`
    flex-direction: column;
    height: auto;
    justify-content: flex-start;
    padding-bottom: 1rem;
  `}
`;

export const PostHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  padding: 3rem 3rem 0;
  max-width: 860px;

  /* ${media.lessThan('large')`
    padding: 3rem 0 0;
    max-width: 100%;
  `} */
`;

export const PostTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  /* ${media.lessThan('large')`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `} */
`;

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  /* ${media.lessThan('large')`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `} */
`;

export const PostDate = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 1rem 0;
  color: var(--texts);

  /* ${media.lessThan('large')`
    padding: 0 1rem;
  `} */
`;

export const MainContent = styled.section`
  margin: auto;
  padding: 2.5rem 3rem;
  max-width: 860px;

  /* ${media.lessThan('large')`
    padding: 2rem 0;
    max-width: 100%;
  `} */

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--postColor);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0;

    /* ${media.lessThan('large')`
      padding: 0 1rem;
      word-break: break-word;
    `} */
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    /* ${media.lessThan('large')`
      padding: 0 1rem;
    `} */
  }
  blockquote {
    color: var(--postColor);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;

    /* ${media.lessThan('large')`
      font-size: 1.875rem;
    `} */
  }
  h2 {
    font-size: 2.1rem;

    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;

    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan('large')`
      padding: 0;
    `}
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--postColor);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
