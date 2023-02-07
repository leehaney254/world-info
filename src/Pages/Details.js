import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../redux/countries/countries';
import Navbar from '../components/Navbar';

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
            <div>
              <div>
                <img src={countryData.country[0].flag.svg} alt="Country flag" />
                <div>
                  <p>
                    Name:
                    {countryData.country[0].countryName}
                  </p>
                  <p>
                    Currency:
                    {countryData.country[0].currencies[0].name}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Capital:
                  </p>
                  <p>{countryData.country[0].capital}</p>
                </div>
                <div>
                  <p>Area:</p>
                  <p>{countryData.country[0].area}</p>
                </div>
                <div>
                  <p>Population:</p>
                  <p>{countryData.country[0].population}</p>
                </div>
                <div>
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
