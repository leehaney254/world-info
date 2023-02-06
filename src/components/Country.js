import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Country = ({ data }) => (
  <div>
    <Link to={data}>
      <div>
        Flag
        <BsArrowRightCircle />
      </div>
      <p>Name</p>
      <p>Population</p>
    </Link>
  </div>
);

Country.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Country;
