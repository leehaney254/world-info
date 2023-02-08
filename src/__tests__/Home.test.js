import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Home from '../Pages/Home';
import store from '../redux/configStore';

configure({ adapter: new Adapter() });

describe('Home component renders correctly', () => {
  it('has a match with snapshot', () => {
    const countryData = {
      loading: false,
      error: null,
      country: [
        {
          countryName: 'Kenya',
          capital: 'Nairobi',
          region: 'Africa',
          population: 53771300,
          area: 580367,
          timezones: 'UTC+03:00',
          flag: 'https://flagcdn.com/ke.svg',
          currencies: 'Kenyan shilling',
        },
      ],
    };
    const wrapper = shallow(<Provider store={store}><Home countryData={countryData} /></Provider>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
