import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import Details from '../Pages/Details';

configure({ adapter: new Adapter() });

describe('Details component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Provider store={store}><Details /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
