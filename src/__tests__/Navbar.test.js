import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Navbar from '../components/Navbar';

configure({ adapter: new Adapter() });

describe('Navbar component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Navbar data="test data" year="2022" />);
    expect(wrapper).toMatchSnapshot();
  });
});
