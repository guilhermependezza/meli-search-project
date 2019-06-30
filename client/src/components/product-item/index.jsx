import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './product-item.scss';

function ProductItem({ productData }) {
  const isFreeShipping = productData.shipping.free_shipping;
  return (
    <div className="product-item">
      <Link to={`/items/${productData.id}`} className="product-link">
        <img className="product-image" src={productData.thumbnail} alt={productData.title} />
        <div className="product-data">
          <p className="product-price">
            {productData.price}
            { isFreeShipping
              ? <img className="free-shipping" src="/images/ic_shipping.png" alt="Frete Grátis" />
              : null
              }
          </p>
          <p className="seller-location">{productData.address.state_name}</p>
          <p className="product-title">{productData.title}</p>
        </div>
      </Link>
    </div>
  );
}

ProductItem.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    address: PropTypes.object,
    shipping: PropTypes.object,
    price: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};

export default ProductItem;
