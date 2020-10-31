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

  ${media.lessThan('large')`
    width: 100vw;
  `}

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox {
    padding: 0;
  }
  .ais-Stats {
    padding: 0.5rem 2rem;
    color: var(--texts);
    font-size: .8rem;
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

  .ais-Pagination {
    background-color: var(--background);
  }
  .ais-Pagination-list {
    display: flex;
    align-items: center;
    height: 3rem;
  }
  .ais-Pagination-item {
    font-size: 1rem;
    height: 3rem;
    color: var(--texts);

    &.ais-Pagination-item--disabled {
      opacity: 0.3;
    }

    &:not(.ais-Pagination-item--disabled) {
      .ais-Pagination-link:hover {
        color: var(--highlight);
        background-color: var(--gray);
        cursor: pointer;
      }
    }
  }

  .ais-Pagination-link {
    padding: 1rem;
    display: block;
    color: var(--texts);
    text-decoration: none;
    transition: 0.5s;
  }

  .ais-Pagination-link--selected {
    color: var(--highlight);
    text-decoration: none;
  }

  .ais-Hits-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
