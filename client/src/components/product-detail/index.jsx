import React from 'react';
import './product-detail.scss';

import productDetail from '../../mocks/product-detail.json';
import productDetailDescription from '../../mocks/product-detail-description.json';

export default function ProductDetail() {
  const { item } = productDetail;
  return (
    <div className="product-detail">
      <div className="product-detail-banner">
        <figure className="product-figure">
          <img className="product-figure-img" src={item.pictures[0].url} alt="" />
        </figure>
        <div className="product-data">
          <h1 className="product-title">{item.title}</h1>
          <p className="product-quantity">Quantidade: {item.available_quantity}</p>
          <p className="product-price">$ {item.price}</p>
          <button type="button">Comprar</button>
        </div>
      </div>
      <div className="product-detail-description">
        <h2 className="description-header">Descrição do produto</h2>
        <p className="description-text">{productDetailDescription.plain_text}</p>
      </div>
    </div>
  );
}
