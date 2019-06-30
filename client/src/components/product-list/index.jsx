import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from 'components/product-item';
import './product-list.scss';

function ProductList({ searchResults }) {
  return (
    <div className="product-list">
      {searchResults.items.map(i => <ProductItem productData={i} />)}
    </div>
  );
}

ProductList.propTypes = {
  searchResults: PropTypes.shape({
    items: PropTypes.array
  }).isRequired
};

export default ProductList;
