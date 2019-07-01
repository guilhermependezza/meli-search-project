import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import { mockedRouter } from 'mocks/router';
import Searchbar from 'components/searchbar';

describe('Searchbar', () => {
  it('should match snapshot ', () => {
    const searchbar = create(mockedRouter(<Searchbar />)).toJSON();
    expect(searchbar).toMatchSnapshot();
  });

  it('should call preventDefault when empty', () => {
    const wrapper = mount(mockedRouter(<Searchbar />));

    const event = {
      preventDefault: jest.fn(),
      target: [{
        search: { value: '' }
      }]
    };
    wrapper.find('form').props().onSubmit(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should call submit when input is filled', () => {
    const wrapper = mount(mockedRouter(<Searchbar />));

    const event = {
      preventDefault: jest.fn(),
      target: [{
        value: 'geladeira'
      }]
    };

    wrapper.find('form').props().onSubmit(event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
