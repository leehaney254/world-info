import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Details = () => {
  const params = useParams();
  const countriesData = useSelector((state) => state.countries);
  const countryDetails = countriesData.filter(
    (country) => country.countryName === params.countryId,
  );
  return (
    <div>
      <Navbar data="Town/City info" />
      <main>
        <div>
          <img src={countryDetails[0].flag.svg} alt="Country flag" />
          <div>
            <p>
              Name:
              {countryDetails[0].countryName}
            </p>
            <p>
              Currency:
              {countryDetails[0].currencies[0].name}
            </p>
          </div>
        </div>
        <div>
          <div>
            <p>
              Capital:
            </p>
            <p>{countryDetails[0].capital}</p>
          </div>
          <div>
            <p>Area:</p>
            <p>{countryDetails[0].area}</p>
          </div>
          <div>
            <p>Population:</p>
            <p>{countryDetails[0].population}</p>
          </div>
          <div>
            <p>timezones:</p>
            <p>{countryDetails[0].timezones[0]}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Details;
