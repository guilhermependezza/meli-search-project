import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './searchbar.scss';

import { getSearchTermFromQueryString, isProductId } from '../../helpers';

function SearchBar({ history }) {
  function onSubmit(e) {
    const { value } = e.target[0];
    if (!value) {
      e.preventDefault();
    }

    if (isProductId(value)) {
      e.preventDefault();
      const url = ('/items/', value);
      history.push(url);
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

SearchBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(SearchBar);
