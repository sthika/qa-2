import React, { useState } from 'react';
import './paginate.css'

const Paginate = ({ perPage, totalCard, paginate, currentPage }) => {
  const [activePaginate, setActivePaginate] = useState(1);
  const pageNumber = [];
  const [paginateEl, setPaginateEl] = useState();

  for (let i = 1; i <= Math.ceil(totalCard / perPage); i++) {
    pageNumber.push(i);
  }
  return (
      <ul className='pagination-list'>
        {currentPage > 1 ? (
          <li onClick={() => setActivePaginate(activePaginate - 1)}>
            <button onClick={() => paginate(currentPage - 1)}> prev </button>
          </li>
        ) : (
          null
        )}
        {pageNumber.map((number) => (
          <li
            onClick={() => setActivePaginate(number)}
            className={
              activePaginate === number
                ? 'active__paginate'
                : 'pagination__number'
            }
            key={number}>
            <a
              href='#'
              className='pagination__link'
              onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        {currentPage < 5 ? (
          <li onClick={() => setActivePaginate(activePaginate + 1)}>
            <button onClick={() => paginate(currentPage + 1)}> next </button>
          </li>
        ) : null}
      </ul>
  );
};

export default Paginate;
