import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ loginBtnIsActive, setLoginBtnState, handleSubmitLogin }) => {

  return loginBtnIsActive ? (
    <div className='login'>
      <h2 className='login__title'>Login</h2>
      <form className='login__form'>
        <label id='username'>Username</label>
        <input
          autoComplete='off'
          onChange={(e) => {
            // setLogin(e.target.value);
          }}
          type='text'
          name='username'
          id='username-field'
          class='sign-up-field'
          placeholder='Username'
        />

        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='password' />

        <button
          onClick={handleSubmitLogin}
          className='sign-up__btn'
          type='button'
          value='Sign Up'
          id='sign-up-submit'>
          Submit
        </button>
      </form>
      <p>
        Don't have an account yet?{' '}
        <NavLink
          to='/signup'
          className='login__link'
          onClick={setLoginBtnState}>
          Sign Up
        </NavLink>
      </p>
    </div>
  ) : null;
};

export default LoginForm;
