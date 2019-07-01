import React, { Component } from 'react';
import ProductList from 'components/product-list';
import { getSearchResults } from 'services/fetch-service';
import { getSearchTermFromQueryString } from '../../helpers';

export default class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null
    };
    this.searchTerm = getSearchTermFromQueryString(window.location);
  }

  componentDidMount() {
    getSearchResults(this.searchTerm)
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
