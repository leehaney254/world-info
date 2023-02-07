import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countries/countries';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import world from '../assets/world.jpg';
import Country from '../components/Country';

import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const { countries } = countriesData;

  const displayCountries = countries.map((country) => (
    <Country
      key={country.countryName}
      name={country.countryName}
      population={country.population}
    />
  ));
  return (
    <>
      <Navbar data="Countries" />
      <div><img id="world" src={world} alt="world map" /></div>
      <Form />
      <p>Countries</p>
      <div>
        {countriesData.loading && <h1>Loading...</h1>}
        {!countriesData.loading && countriesData.error ? (
          <div>
            Error:
            {countriesData.error}
          </div>
        ) : null}
        {!countriesData.loading && countriesData.countries.length ? (
          <div>{displayCountries}</div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
