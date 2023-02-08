const mockFetchCountries = () => (
  [
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
  ]
);

const mockFetchCountry = () => ([
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
]);

export { mockFetchCountries, mockFetchCountry };
