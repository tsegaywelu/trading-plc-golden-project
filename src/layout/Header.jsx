import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='flex justify-evenly shadow p-3 items-center'>

        <img src="./logo.PNG" alt="image loading "  width={100} height={50}/>

      <Link to="/Home">Home</Link>
      <Link to='./Services'>Services/Products</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to='./Vacnncy'>Vacnncy</Link>
      <Link to='./Shares'>Shares </Link>
      <Link to='./FAQ'>FAQ </Link>

      </div>
    </div>
  );
};

export default Header;
