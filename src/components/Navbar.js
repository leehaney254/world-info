import React from 'react';
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { BiMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const Navbar = () => (
  <header>
    <Link to="/"><IoChevronBack /></Link>
    World info
    <BiMicrophone />
    <FiSettings />
  </header>
);

export default Navbar;
