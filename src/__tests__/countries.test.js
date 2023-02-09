import axios from 'axios';
import { fetchCountries, fetchCountry } from '../redux/countries/countries';

jest.mock('axios');

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

  describe('When API is sucessful', () => {
    it('Should return details about a country', async () => {
      const country = [
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
      ];
      axios.get.mockResolvedValueOnce(country);

      const result = await fetchCountry();
      expect(result).toEqual(result);
    });
  });
});
