import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import Button from '../Button';

class HeaderMobile extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div id="outer-container">
      <Menu className={ "header__nav-mobile" } width={'80%'} >
        <NavLink to='/collections' className='header__link'>
          Collections
        </NavLink>
        <NavLink to='/about' className='header__link'>
          About Us
        </NavLink>
        <NavLink to='/faq' className='header__link'>
          FAQ
        </NavLink>

        <NavLink to='/cart' className='header__link'>
            <Button text={'Cart'} className={'header__cart-btn'} />
          </NavLink>
      </Menu>
      </div>
    );
  }
}
export default HeaderMobile;
