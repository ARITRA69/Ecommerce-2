import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-4 text-center md:justify-between bg-primary text-white px-12 bottom-0">
      <Typography color="blue-gray" className="font-normal">
        2023 Mittikalakar &copy; All Copyrights Reserved
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link to='/about' className='font-normal hover:underline transition-all duration-300 focus:text-red-300'>
            About Us
          </Link>
        </li>
        <li>
          <Typography
            as="a"
            href="/contact"
            color="blue-gray"
            className="font-normal hover:underline transition-all duration-300 focus:text-red-300"
          >
            Contact
          </Typography>
        </li>
      </ul>
    </footer>
  );

};

export default Footer;
