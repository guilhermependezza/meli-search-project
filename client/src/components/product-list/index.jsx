import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from 'components/product-item';
import Breadcrumb from 'components/breadcrumb';
import './product-list.scss';

function ProductList({ searchResults }) {
  console.log(searchResults);
  console.log(searchResults.categories);
  return (
    <>
      <Breadcrumb categories={searchResults.categories} />
      <div className="product-list">
        {
          searchResults
            .items.map(i => <ProductItem productData={i} key={i.id} />)
        }
      </div>
    </>
  );
}

ProductList.propTypes = {
  searchResults: PropTypes.shape({
    items: PropTypes.array.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default ProductList;
