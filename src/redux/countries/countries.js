import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  countries: [],
  error: '',
};

const fetchCountries = createAsyncThunk('country/fetchCountry', () => axios.get('https://restcountries.com/v2/all')
  .then((res) => res.data.map((country) => (
    {
      countryName: country.name,
      capital: country.capital,
      region: country.region,
      population: country.population,
      area: country.area,
      timezone: country.timezone,
      flag: country.flags,
      currencies: country.currencies,
    }
  ))));

const countrySlice = createSlice({
  name: 'countries',
  initialState,
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
  },
});

export default countrySlice.reducer;
export { fetchCountries };
