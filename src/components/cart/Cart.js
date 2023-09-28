import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './cart.css';
import Button from '../Button';
import { ProductsContext } from '../../App';

const Cart = ({ cartBtnIsActive }) => {
  const { products, setProducts } = useContext(ProductsContext);

  const removeAll = () => {
    setProducts([]);
    localStorage.clear();
  };


  console.log('render');
  return cartBtnIsActive ? (
    <div className='header__cart'>
      <div className='container'>
        <h1 className='cart__header'>Корзина</h1>
        {products.length ? (
          <div className='cart__products'>
            {products.map((el, idx) => (
              <div className='cart__product'>
                <div className='cart__image'>
                  <img src={el.url} alt={el.title} />
                </div>
                <div className='cart__desc'>
                  <p className='cart__product-name'>{el.title}</p>

                  <p className='cart__price'>{el.price}</p>
                </div>
                <div className='cart__value'>
                  <p className='cart__value-count'>count: {el.count}</p>
                  <p className='cart__value-price'>
                    {' '}
                    total: {el.price * el.count}
                  </p>
                </div>
              </div>
            ))}
            <button onClick={removeAll} className='cart__removeAll'>
              Remove All
            </button>
          </div>
        ) : (
          <p className='section__subtitle'>Empty</p>
        )}
      </div>
    </div>
  ) : null;
};

export default Cart;
