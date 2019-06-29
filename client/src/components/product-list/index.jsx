import React from 'react';
import ProductItem from 'components/product-item';
import './product-list.scss';

import productItemsMock from '../../mocks/product-list.json';

export default function ProductList() {
  return (
    <div className="product-list">
      {productItemsMock.items.map(i => <ProductItem productData={i} />)}
    </div>
  );
}
