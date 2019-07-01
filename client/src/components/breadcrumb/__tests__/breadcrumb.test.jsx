import React from 'react';
import { create } from 'react-test-renderer';

// Component
import Breadcrumb from 'components/breadcrumb';

describe('Header', () => {
  it('should match snapshot', () => {
    const categories = ['The', 'categories'];
    const breadcrumb = create(<Breadcrumb categories={categories} />);
    expect(breadcrumb).toMatchSnapshot();
  });
});
