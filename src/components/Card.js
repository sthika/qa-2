import React from 'react';
import Button from './Button';

const Card = ({ photo, author }) => {

  function getPrice(min, max) {
    let price = Math.random() * (max - min) + min;
    photo.price = Math.round(price)
    return Math.round(price);
  }


  return (
    <div className='collection__card'>
      <div className='collection__image'>
        <img src={photo.url} alt={photo.title} />
      </div>
      <div className='collection__desc'>
        <p className='collection__author'>@{author?.name}</p>
        <p className='collection__price'>{getPrice(1,100)} $</p>
        <p className='collection__title'>{photo.title}</p>
      </div>
      <Button text={'Add'} className={'collection__btn'} />
    </div>
  );
};

export default Card;
