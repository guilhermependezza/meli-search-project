import React, { Component } from 'react';
import ProductList from 'components/product-list';
import { getSearchTermFromQueryString } from 'helpers';


export default class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.searchTerm = getSearchTermFromQueryString(window.location);
  }

  render() {
    return (
      <div>
        <ProductList />
      </div>
    );
  }
}
