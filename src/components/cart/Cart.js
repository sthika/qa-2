import React, { useContext } from 'react';
import './cart.css';
import { ProductsContext } from '../../App';

const Cart = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const removeAll = () => {
    setProducts([]);
    localStorage.clear();
  };

  return (

    <section className='cart'>
      <div className='container'>
        <h1 className='section__title'>Корзина</h1>
        {products.length ? (
          <div className='cart__products'>
            {products.map((el, idx) => (
              <div className='cart__product'>
                <div className='cart__image'>
                  <img src={el.url} alt={el.title} />
                </div>
                <div className='cart__desc'>
                  <p className='cart__product-name'>{el.title}</p>

                  <p className='cart__price'>Price: {el.price}$</p>
                </div>
                <div className='cart__value'>
                  <p className='cart__value-count'>count: {el.count}$</p>
                  <p className='cart__value-price'>
                    total: {el.price * el.count}$
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
    </section>
  ) ;
};

export default Cart;
