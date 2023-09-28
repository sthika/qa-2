import React from 'react';
import binance from '../assets/Binance_logo.svg';
import etherium from '../assets/Ethereum_logo.svg';
import blockchain from '../assets/Blockchain_logo.svg';


const Partners = () => {
  return (
    <section id='partners' className='partners'>
      <div className='container partners__wrapper'>
        <div className='partners__logo partners__logo-binance'>
          <img src={binance} alt='' />
        </div>
        <div className='partners__logo partners__logo-etherium'>
          <img src={etherium} alt='' />
        </div>
        <div className='partners__logo partners__logo-blockchain'>
          <img src={blockchain} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Partners;
