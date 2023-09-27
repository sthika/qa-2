import React, {useState, useCallback} from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
// import Input from '../Input';
import HeaderMobile from '../header/HeaderMobile';
import Contact from '../contact/Contact';
import LoginForm from '../loginform/Login';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loginBtnIsActive, setLoginBtnIsActive] = useState(false);

  const setLoginBtnState = useCallback(() => {
    setLoginBtnIsActive(!loginBtnIsActive);
    
  }, [loginBtnIsActive]);

  console.log(loginBtnIsActive)
  
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
      setIsAuth(true);
      console.log('auth true');
      setLoginBtnState();
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

          {isAuth ? (
            <p>hi, a</p>
          ) : (
            <Button text={'Log in'} className={'header__sign-up'} onClick={()=>{setLoginBtnIsActive(!loginBtnIsActive)}} />
          )}
          <LoginForm
            handleSubmitLogin={handleSubmitLogin}
            loginBtnIsActive={loginBtnIsActive}
            setLoginBtnState={setLoginBtnState}
          />
        </nav>

        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;
