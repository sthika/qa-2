import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import File from '../assets/file.png'  

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__wrapper'>
        <div className='footer__desc'>
          <p className='footer__logo'>
            <img src={logo} alt='' />
          </p>
          <p className='footer__text'>
            The best NFT marketplace website in the world and feel your
            experience in selling or buy our work
          </p>
        </div>

        <nav className='footer__about'>
          <p className='footer__title'>About</p>
          <li>
            <NavLink to='/collections' className='footer__link'>
              Product
            </NavLink>
          </li>
          <li>
            <a href="#faq" className="footer__link">FAQ</a>
          </li>
        </nav>

        <nav className='footer__company'>
          <p className='footer__title'>About</p>
          <li>
            <a href='#partners'>Partners</a>
          </li>
          <li>
          <a download='' href={File}>Privacy & Policy</a>
          </li>
        </nav>

        <div className='footer__contact'>
          <p className='footer__title'>Contact</p>
          <p className='footer__phone'>+996 770 254353</p>
          <p className='footer__text'>sveta.tyo45@gmail.com</p>
          <div className='footer__social'>
            <div className='footer__youtube'>
              <a href=''></a>
            </div>
            <div className='footer__discord'>
              <a href=''></a>
            </div>
            <div className='footer__instagram'>
              <a href=''></a>
            </div>
          </div>
        </div>
      </div>
      <p className='footer__copyright'>
        Created by <span className='footer__title'>Zarror</span> | All Right
        Reserved!
      </p>
    </footer>
  );
};

export default Footer;
