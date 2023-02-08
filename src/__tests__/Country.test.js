import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Country from '../components/Country';

configure({ adapter: new Adapter() });

describe('Country component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Country
        name="Kenya"
        population="53771300"
        flag="https://flagcdn.com/ke.svg"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <Country
        name="Uganda"
        population="5399000"
        flag="https://flagcdn.com/ke.svg"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
