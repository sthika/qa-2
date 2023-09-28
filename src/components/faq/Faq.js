import React, { useState } from 'react';
import './faq.css';

const Faq = () => {
  const accordions = [
    {
      title: 'Lorem, ipsum dolor1.',
      desc: 'Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.',
      id: 1,
    },
    {
      title: 'Lorem, ipsum dolor2.',
      desc: 'Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.',
      id: 2,
    },
    {
      title: 'Lorem, ipsum dolor3.',
      desc: 'Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.',
      id: 3,
    },
    {
      title: 'Lorem, ipsum dolor4.',
      desc: 'Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.',
      id: 4,
    },
    {
      title: 'Lorem, ipsum dolor5.',
      desc: 'Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.',
      id: 5,
    },
    {
      title: 'Lorem, ipsum dolor6.',
      desc: 'Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem, ipsum dolor.',
      id: 6,
    },
  ];
  const [openStates, setIsOpen] = useState({});

  const handleClick = (id) => {
    if (openStates[id]) {
      setIsOpen({ ...openStates, [id]: false });
    } else {
      setIsOpen({ ...openStates, [id]: true });
    }
    console.log(openStates);
  };

  return (
    <section className='faq' id='faq'>
      <div className='container'>
        <h2 className='faq__title'>Freaquently Asked Question</h2>
        <p className='section__subtitle faq__subtitle'>Wanna Ask Something?</p>

        <div className='faq__wrapper'>
          {accordions.map((el) => (
            <div
              id={el.id}
              className='faq__accordeon'
              onClick={() => handleClick(el.id)}>
              <div className='faq__accordeon-main'>
                <p className='faq__accordeon-title'>{el.title}</p>
                <p>+</p>
              </div>
              {openStates[el.id] ? (
                <div className='faq__accordeon-desc'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, laboriosam?
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
