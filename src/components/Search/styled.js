import styled from 'styled-components';
import media from 'styled-media-query';

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 30rem;
  transition: opacity 0.4s;
  height: 100vh;
  overflow-y: scroll;

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox {
    padding: 0;

    /* ${media.lessThan('large')`
      padding: 0.5rem 1rem;
    `} */
  }
  .ais-Stats {
    padding: 0.5rem 2rem;
    color: var(--texts);
    font-size: .8rem;

    /* ${media.lessThan('large')`
      padding: 0.5rem 1rem;
    `} */
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--borders);
    color: var(--texts);
    display: flex;
    font-size: 1rem;
    padding: 1rem 2rem;
    width: 100%;
    height: 3rem;
    &::placeholder {
      color: var(--texts);
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`;
