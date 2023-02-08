import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './Country.css';

const Country = ({ name, population, flag }) => (
  <div className="borders">
    <Link className="countryLink" to={name}>
      <div className="homeFlag">
        <img alt="Flag" src={flag} className="flagSize" />
        <BsArrowRightCircle />
      </div>
      <div className="countryName">
        <p>{name}</p>
        <div className="countryPopulation">
          Population:
          <p>{population}</p>
        </div>
      </div>
    </Link>
  </div>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
