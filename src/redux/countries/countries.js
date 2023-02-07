import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  countries: [],
  error: '',
  continent: 'Africa',
  country: [],
};

const fetchCountries = createAsyncThunk('country/fetchCountry', () => axios.get('https://restcountries.com/v2/all')
  .then((res) => res.data.map((country) => (
    {
      countryName: country.name,
      region: country.region,
      population: country.population,
      flag: country.flags,
    }
  ))));

const fetchCountry = createAsyncThunk('country/fetchSpecificCountry', (country) => (
  axios.get(`https://restcountries.com/v2/name/${country}`)
    .then((res) => res.data.map((country) => (
      {
        countryName: country.name,
        capital: country.capital,
        region: country.region,
        population: country.population,
        area: country.area,
        timezones: country.timezones,
        flag: country.flags,
        currencies: country.currencies,
      }
    )))));

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    filterContinent: (state, continent) => (
      { ...state, continent: continent.payload }
    ),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => (
      {
        ...state,
        loading: true,
      }
    ));
    builder.addCase(fetchCountries.fulfilled, (state, action) => (
      {
        ...state,
        loading: false,
        countries: action.payload,
        error: '',
      }
    ));
    builder.addCase(fetchCountries.rejected, (state, action) => (
      {
        ...state,
        loading: false,
        countries: [],
        error: action.error.message,
      }
    ));
    builder.addCase(fetchCountry.pending, (state) => (
      {
        ...state,
        loading: true,
      }
    ));
    builder.addCase(fetchCountry.fulfilled, (state, action) => (
      {
        ...state,
        loading: false,
        country: action.payload,
        error: '',
      }
    ));
    builder.addCase(fetchCountry.rejected, (state, action) => (
      {
        ...state,
        loading: false,
        country: [],
        error: action.error.message,
      }
    ));
  },
});

export default countrySlice.reducer;
export const { filterContinent, getCountry } = countrySlice.actions;
export { fetchCountries, fetchCountry };
