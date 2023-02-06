import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import world from '../assets/world.jpg';
import Country from '../components/Country';

import './Home.css';

const Home = () => (
  <>
    <Navbar />
    <div><img id="world" src={world} alt="world map" /></div>
    <Form />
    <p>Countries</p>
    <div>
      <Country data="kenya" />
    </div>
  </>
);

export default Home;
