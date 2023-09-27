import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import CollectionMobile from '../components/CollectionMobile';
import Paginate from '../components/paginate/Paginate';

const Collection = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let { data } = await axios(`https://jsonplaceholder.typicode.com/users`);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [id, setId] = useState(1);

  const [album, setAlbum] = useState([]);
  const getAlbum = async (id) => {
    let { data } = await axios(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
    setAlbum(data);
  };

  useEffect(() => {
    getAlbum(id);
  }, [id]);

  const getAuthor = () => {
    return users.find((el) => el.id === id);
  };

  const [active, setActive] = useState(0);

  const handleClick = (event, user) => {
    setActive(Number(event.target.id));
    console.log(event.target.id)
    setId(user.id);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const lastIndex = perPage * currentPage;
  const firstIndex = lastIndex - perPage;

  const currentCards = album.slice(firstIndex, lastIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePerPage = (e) => {
    setPerPage(Number(e.target.value));
  };

  return (
    <section className='collection'>
      <div className='container'>
        <h2 className='section__title'>Collection</h2>
        <p className='section__subtitle'>Select an author</p>

        <div className='collection__types'>
          {/* Вместо категорий использовала юзеров */}
          {users.map((user, idx) => (
            <button
              id={idx}
              className={
                active === idx
                  ? 'collection__user-active collection__user'
                  : 'collection__user'
              }
              onClick={(e) => {
                handleClick(e, user);
              }}>
              {user.name}
            </button>
          ))}
        </div>

        <CollectionMobile users={users} setId={setId} id={id} />

        <div className='collection__cards'>
          {currentCards.map((el) => (
            <Card photo={el} author={getAuthor()} />
          ))}
        </div>

        <Paginate
          perPage={perPage}
          totalCard={album.length}
          paginate={paginate}
          currentPage={currentPage}
        />

        <div className='collection__perpage'>
          <label>Элементов на странцие:</label>

          <select value={perPage} onChange={handlePerPage}>
            <option value='3'>3</option>
            <option value='6'>6</option>
            <option value='12'>12</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Collection;
