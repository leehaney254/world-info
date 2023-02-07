import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Country = ({ name, population }) => (
  <div>
    <Link to={name}>
      <div>
        Flag
        <BsArrowRightCircle />
      </div>
      <p>{name}</p>
      <p>{population}</p>
    </Link>
  </div>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

export default Country;
