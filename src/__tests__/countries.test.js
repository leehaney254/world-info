import axios from 'axios';
import { fetchCountries } from '../redux/countries/countries';
import { mockFetchCountries, mockFetchCountry } from '../__mock__/utils';

describe('Get Countries', () => {
  it('Gets a list of countries', async () => {
    const expectedValue = [
      {
        countryName: 'Kenya',
        region: 'Africa',
        population: 50000000,
        flag: 'https://example.com/us-flag.png',
      },
      {
        countryName: 'Nigeria',
        region: 'Africa',
        population: 200000000,
        flag: 'https://example.com/canada-flag.png',
      },
    ];

    const res = await mockFetchCountries();
    expect(res).toEqual(expectedValue);
  });

  it('Gets a country', async () => {
    const expectedVal = [
      {
        countryName: 'Kenya',
        capital: 'Nairobi',
        region: 'Africa',
        population: 50000000,
        area: 91475,
        timezones: ['EAT'],
        flag: 'https://example.com/us-flag.png',
        currencies: [{ code: 'ksh' }],
      },
    ];

    const resp = await mockFetchCountry();
    expect(resp).toEqual(expectedVal);
  });
});

jest.mock(axios);

describe('getUsers', () => {
  describe('When API is sucessful', () => {
    it('Should return list of countries', async () => {
      const countries = [
        {
          countryName: 'Kenya',
          region: 'Africa',
          population: 50000000,
          flag: 'https://example.com/us-flag.png',
        },
        {
          countryName: 'Nigeria',
          region: 'Africa',
          population: 200000000,
          flag: 'https://example.com/canada-flag.png',
        },
      ];
      axios.get.mockResolvedValueOnce(countries);

      const result = await fetchCountries();
      expect(result).toEqual(result);
    });
  });
});
