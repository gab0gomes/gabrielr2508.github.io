import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: #16202c;
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }

  body {
    --menuBarWidth: 4rem;
    --dark-plus: #283149;
    --dark: #404B69;
    --light-blue: #DBEDF3;
    --guava-pink: #DA0463;
    --white: #FFFFFF;
    --gray: #F6F8FB;
    --postWidth: calc(100vw - 30rem - var(--menuBarWidth));
  }

  body.light {
    --borders: var(--light-blue);
    --texts:  var(--dark);
    --background: var(--white);
    --highlight: var(--guava-pink);
    --postColor:  var(--dark);
  }
  body.dark {
    --borders: var(--light-blue);
    --texts:  var(--white);
    --background: var(--dark-plus);
    --highlight: var(--guava-pink);
    --postColor:  var(--white);
  }

  .Toastify__toast {
    min-height: 3rem;
    box-shadow: 4px 4px 0px 0px rgba(0,0,0,0.2);
    background-color: var(--background);
    border: 1px solid var(--light-blue);
  }
  .Toastify__toast-container {
    top: 4rem;
  }
  .Toastify__toast--default {
    color: var(--texts);
  }
  .Toastify__toast-body {
    /* margin: 0; */
  }
  .Toastify__close-button {
    display: none;
  }
`;

export default GlobalStyles;
