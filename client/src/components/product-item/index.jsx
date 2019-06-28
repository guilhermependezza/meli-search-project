import React from 'react';
import PropTypes from 'prop-types';
import './product-item.scss';

function ProductItem({ productData }) {
  return (
    <div className="product-item" key={productData.id}>
      <img className="product-image" src={productData.thumbnail} alt={productData.title} />
      <div>
        <p className="product-price">{productData.price}</p>
        <p className="product-title">{productData.title}</p>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};

export default ProductItem;
