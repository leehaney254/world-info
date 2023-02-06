import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countries';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import world from '../assets/world.jpg';
import Country from '../components/Country';

import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <>
      <Navbar data="Countries" />
      <div><img id="world" src={world} alt="world map" /></div>
      <Form />
      <p>Countries</p>
      <div>
        <Country data="kenya" />
      </div>
    </>
  );
};

export default Home;
