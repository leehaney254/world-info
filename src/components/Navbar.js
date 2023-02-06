import React from 'react';
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { BiMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Navbar = ({ data }) => (
  <header>
    <Link to="/"><IoChevronBack /></Link>
    {data}
    <BiMicrophone />
    <FiSettings />
  </header>
);

Navbar.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Navbar;
