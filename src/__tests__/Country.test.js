import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Country from '../components/Country';

describe('Country render component', () => {
  it('The render is correct', () => {
    const tree = renderer
      .create(<BrowserRouter><Country name="Kenya" population={50000000} /></BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('The render is correct', () => {
    const tree = renderer
      .create(<BrowserRouter><Country name="Uganda" population={35000000} /></BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
