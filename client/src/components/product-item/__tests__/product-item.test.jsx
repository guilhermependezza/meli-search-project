import React from 'react';
import { create } from 'react-test-renderer';
import { mockedRouter } from 'mocks/router';
import ProductItem from 'components/product-item';
import productListMock from 'mocks/product-list.json';

describe('ProductItem', () => {
  it('should match snapshot', () => {
    const item = productListMock.items[0];
    const productItem = create(mockedRouter(<ProductItem productData={item} />)).toJSON();
    expect(productItem).toMatchSnapshot();
  });
});
