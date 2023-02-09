import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countries';

const store = configureStore({ reducer: countriesReducer });

export default store;
