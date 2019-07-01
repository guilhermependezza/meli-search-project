import React from 'react';
import { create } from 'react-test-renderer';
import { mockedRouter } from 'mocks/router';

// Component
import Header from 'components/header';

describe('Header', () => {
  it('should match snapshot', () => {
    const header = create(mockedRouter(<Header />)).toJSON();
    expect(header).toMatchSnapshot();
  });
});
