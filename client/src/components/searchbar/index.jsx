import React from 'react';
import './searchbar.scss';

import { getSearchTermFromQueryString } from '../../helpers';

function SearchBar() {
  function onSubmit(e) {
    const { value } = e.target[0];
    if (!value) {
      e.preventDefault();
    }
  }

  const searchTerm = getSearchTermFromQueryString(window.location);

  return (
    <form
      action="/items/"
      className="searchbar flex-wrapper align-center justify-center"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="input"
        name="search"
        defaultValue={searchTerm || ''}
        placeholder="Do que você precisa?"
      />
      <button className="button" type="submit">
        <img src="/images/ic_Search.png" alt="Pesquisar" />
      </button>
    </form>
  );
}

export default SearchBar;
