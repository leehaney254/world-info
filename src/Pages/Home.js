import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { fetchCountries, filterContinent } from '../redux/countries/countries';
import Navbar from '../components/Navbar';
import world from '../assets/world.jpg';
import Country from '../components/Country';

import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state);
  const { countries, continent } = countriesData;
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countries.length]);

  const displayCountries = countries.filter((country) => country.region === continent)
    .map((country) => (
      <Country
        key={country.countryName}
        name={country.countryName}
        population={country.population}
      />
    ));

  const selectChangeHandler = (e) => {
    dispatch(filterContinent(e.target.value));
  };

  const inputChangeHandler = (t) => {
    console.log(t.target.value);
  };

  return (
    <>
      <Navbar data="Countries" />
      <div><img id="world" src={world} alt="world map" /></div>
      <div>
        <form>
          <input onChange={inputChangeHandler} type="text" placeholder="Eg Kenya, England" />
          <BsSearch />
        </form>
        <label htmlFor="cars">
          Choose by continent
          <select onChange={selectChangeHandler} value={continent} name="cars" id="cars">
            <option value="Africa"> Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
      </div>
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
