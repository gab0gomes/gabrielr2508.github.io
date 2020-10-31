import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination, Configure } from 'react-instantsearch-dom';

import * as S from './styled';
import Hit from './Hit';

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
};

const searchClient = algoliasearch(
  algolia.appId,
  algolia.searchOnlyApiKey,
);

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch
      searchClient={searchClient}
      indexName={algolia.indexName}
    >
      <Configure
        hitsPerPage={8}
      />
      <SearchBox
        translations={{ placeholder: 'Pesquisar um post...' }}
      />
      {/* <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`;
          },
        }}
      /> */}
      <Hits hitComponent={Hit} />
      <Pagination />
    </InstantSearch>
  </S.SearchWrapper>
);

export default Search;
