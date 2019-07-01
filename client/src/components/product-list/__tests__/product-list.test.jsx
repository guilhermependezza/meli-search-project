import React from 'react';
import { create } from 'react-test-renderer';
import { mockedRouter } from 'mocks/router';
import ProductList from 'components/product-list';
import productListMock from 'mocks/product-list.json';

describe('ProductList', () => {
  it('should match snapshot', () => {
    const productItem = create(mockedRouter(<ProductList searchResults={productListMock} />)).toJSON();
    expect(productItem).toMatchSnapshot();
  });
});
