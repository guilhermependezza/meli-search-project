import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product-detail.scss';

import { getProductData, getProductDescription } from 'services/fetch-service';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: null,
      productDescription: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Promise
      .all([getProductData(id), getProductDescription(id)])
      .then(([productDetail, productDescription]) => {
        this.setState({
          productDetail, productDescription
        });
      });
  }

  render() {
    const { productDetail, productDescription } = this.state;
    if (!productDetail) {
      return (
        <div>Loader</div>
      );
    }

    const { item } = productDetail;
    const { sold_quantity: sold, attributes } = item;
    const itemCondition = attributes.filter(i => i.id === 'ITEM_CONDITION')[0];
    console.log(sold, itemCondition);
    const soldQuantityLabel = sold + (sold > 1 ? ' vendidos' : ' vendido');

    return (
      <div className="product-detail">
        <div className="product-detail-banner">
          <figure className="product-figure">
            <img className="product-figure-img" src={item.pictures[0].url} alt="" />
          </figure>
          <div className="product-data">
            <p className="product-condition">{`${itemCondition.value_name} - ${soldQuantityLabel}`}</p>
            <h1 className="product-title">{item.title}</h1>
            <p className="product-quantity">Quantidade: {item.available_quantity}</p>
            <p className="product-price">$ {item.price}</p>
            <button type="button">Comprar</button>
          </div>
        </div>
        <div className="product-detail-description">
          <h2 className="description-header">Descrição do produto</h2>
          <p className="description-text">{productDescription.plain_text}</p>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ProductDetail;
