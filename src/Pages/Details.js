import React from 'react';
import Navbar from '../components/Navbar';

const Details = () => (
  <div>
    <Navbar data="Town/City info" />
    <main>
      <div>
        image
        <div>
          <p>kenya</p>
          <p>Currency</p>
        </div>
      </div>
      <div>
        <div>
          <p>Capital</p>
          <p>Nairobi</p>
        </div>
        <div>
          <p>Area</p>
          <p>580367.0</p>
        </div>
        <div>
          <p>Population</p>
          <p> 53771300</p>
        </div>
        <div>
          <p>timezones</p>
          <p>UTC+03:00</p>
        </div>
      </div>
    </main>
  </div>
);

export default Details;
