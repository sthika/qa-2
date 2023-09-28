import React, { useContext, useState, useEffect } from 'react';
import Button from './Button';
import { ProductsContext } from '../App';

const Card = ({ photo, author }) => {
  const { setProducts } = useContext(ProductsContext);

  const [cardPrice, setCardPrice] = useState(0)
  function getPrice(min, max) {
    let price = Math.random() * (max - min) + min;
    photo.price = Math.round(price);
    return setCardPrice(Math.round(price))
  }


  useEffect(() => {
    getPrice(1,100)
  }, [])
  

  const handleCardlBtn = (e) => {
    console.log('card click');
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    const existingProduct = existingProducts.find((i) => i.id === photo.id);
    if (!existingProduct) {
      photo.count = 1;
      localStorage.setItem(
        'products',
        JSON.stringify([...existingProducts, photo])
      );
      setProducts([...existingProducts, photo]);
    } else {
      existingProducts.forEach((el) => {
        if (el.id === existingProduct.id) {
          el.count = el.count + 1;
        }
      });
      localStorage.clear();
      localStorage.setItem('products', JSON.stringify([...existingProducts]));
      setProducts([...existingProducts]);
    }
  };

  return (
    <div className='collection__card'>
      <div className='collection__image'>
        <img src={photo.url} alt={photo.title} />
      </div>
      <div className='collection__desc'>
        <p className='collection__author'>@{author?.name}</p>
        <p className='collection__price'>{cardPrice} $</p>
        <p className='collection__title'>{photo.title}</p>
      </div>
      <Button
        text={'Add'}
        className={'collection__btn'}
        onClick={handleCardlBtn}
      />
    </div>
  );
};

export default Card;
