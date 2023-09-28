import React, {useState, useCallback} from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
// import Input from '../Input';
import HeaderMobile from '../header/HeaderMobile';
import Contact from '../contact/Contact';
import Cart from '../cart/Cart';

const Header = () => {
  const [cartBtnIsActive, setCartBtnIsActive] = useState(false);

  const setCartBtnState =() => {
    setCartBtnIsActive(!cartBtnIsActive);
    console.log("cart is open")
  }
  

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

          <Button text={'Cart'} className={'header__cart-btn'} onClick={setCartBtnState} />
          
          <Cart cartBtnIsActive={cartBtnIsActive}
          />
        </nav>

        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;
