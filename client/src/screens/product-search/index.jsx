import React, { Component } from 'react';
import ProductList from 'components/product-list';
import { getSearchTermFromQueryString } from 'helpers';
import fetchService from 'services/fetch-service';

export default class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null
    };
    this.searchTerm = getSearchTermFromQueryString(window.location);
  }

  componentDidMount() {
    fetchService.getSearchResults(this.searchTerm)
      .then((searchResults) => {
        this.setState({ searchResults });
      });
  }

  render() {
    const { searchResults } = this.state;
    return (
      <div>
        {
        searchResults
          ? <ProductList searchResults={searchResults} />
          : <div>carregando</div> // extrair loader
        }
      </div>
    );
  }
}
