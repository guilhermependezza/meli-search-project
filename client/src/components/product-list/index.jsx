import React from 'react';
import ProductItem from 'components/product-item';

import productItemsMock from '../../mocks/product-list.json';

export default function ProductList() {
  return (
    <>
      {productItemsMock.items.map(i => <ProductItem productData={i} />)}
    </>
  );
}
