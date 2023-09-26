import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__wrapper'>
        <NavLink to='/' className='header__link header__logo'>
            Psyco<span className='header__logo-violet'>Art</span>
        </NavLink>

        <Input />

        <nav className='header__nav'>
          <NavLink to='/collections' className='header__link'>
            Collections
          </NavLink>
          <NavLink to='/about' className='header__link'>
            About Us
          </NavLink>
          <NavLink to='/faq' className='header__link'>
            FAQ
          </NavLink>

          <Button text= {"Log in"}/>
        </nav>

      </div>
    </header>
  );
};

export default Header;
