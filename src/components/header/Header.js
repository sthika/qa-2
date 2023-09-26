import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
// import Input from '../Input';
import HeaderMobile from '../header/HeaderMobile';
import Contact from '../contact/Contact';

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__wrapper'>
        <NavLink to='/' className='header__link header__logo'>
          Psyco<span className='header__logo-violet'>Art</span>
        </NavLink>

        {/* <Input /> */}

        <nav className='header__nav'>
          <NavLink to='/collections' className='header__link'>
            Collections
          </NavLink>
          <NavLink to='/blog' className='header__link'>
            Blog
          </NavLink>
          <NavLink to='/contact' className='header__link'>
            Contact
          </NavLink>

          <Button text={'Log in'} />
        </nav>

        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;
