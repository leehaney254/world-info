import React from 'react';
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { BiMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import PropTypes from 'prop-types';

import './Navbar.css';

const Navbar = ({ data, year }) => (
  <header id="head">
    <Link id="back" to="/">
      <IoChevronBack />
      {year}
    </Link>
    {data}
    <div id="settings">
      <BiMicrophone />
      <FiSettings />
    </div>
  </header>
);

Navbar.propTypes = {
  data: PropTypes.string.isRequired,
  year: PropTypes.number,
};

Navbar.defaultProps = {
  year: null,
};

export default Navbar;
