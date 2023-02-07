import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Navbar /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
