import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { fetchCountries, filterContinent } from '../redux/countries/countries';
import Navbar from '../components/Navbar';
import world from '../assets/world.jpg';
import Country from '../components/Country';

import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state);
  const { countries, continent } = countriesData;
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countries.length]);

  const displayCountries = countries.filter((country) => country.region === continent)
    .filter((item) => (
      search === '' ? item
        : item.countryName.includes(search)
    ))
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

  const inputChangeHandler = (e) => {
    const input = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setSearch(input);
  };

  return (
    <>
      <Navbar data="Countries" year="2023" />
      <div><img id="world" src={world} alt="world map" /></div>
      <div id="filterContainer">
        <form id="form">
          <input onChange={inputChangeHandler} value={search} type="search" placeholder="Eg Kenya, England" />
          <BsSearch />
        </form>
        <label htmlFor="cars">
          Continent
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
