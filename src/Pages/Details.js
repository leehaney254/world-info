import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../redux/countries/countries';
import Navbar from '../components/Navbar';

import './Details.css';

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCountry(params.countryId));
  }, [dispatch, params.countryId]);

  return (
    <div>
      <Navbar data="Town/City info" />
      <main>
        <div>
          {countryData.loading && <h1>Loading...</h1>}
          {!countryData.loading && countryData.error ? (
            <div>
              Error:
              {countryData.error}
            </div>
          ) : null}
          {!countryData.loading && countryData.country.length ? (
            <div id="detailscolor">
              <div id="detailsFlag">
                <img className="HomeFlag" src={countryData.country[0].flag.svg} alt="Country flag" />
              </div>
              <div>
                <div className="detailContainer">
                  <p>
                    Name:
                  </p>
                  <p>
                    {countryData.country[0].countryName}
                  </p>
                </div>
                <div className="detailContainer">
                  <p>
                    Currency:
                  </p>
                  <p>
                    {countryData.country[0].currencies[0].name}
                  </p>
                </div>
                <div className="detailContainer">
                  <p>
                    Capital:
                  </p>
                  <p>{countryData.country[0].capital}</p>
                </div>
                <div className="detailContainer">
                  <p>Area:</p>
                  <p>{countryData.country[0].area}</p>
                </div>
                <div className="detailContainer">
                  <p>Population:</p>
                  <p>{countryData.country[0].population}</p>
                </div>
                <div className="detailContainer">
                  <p>timezones:</p>
                  <p>{countryData.country[0].timezones[0]}</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Details;
