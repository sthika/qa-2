import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import CollectionMobile from '../components/CollectionMobile';

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

  const [active, setActive] = useState('');

  const handleClick = (event, user) => {
    setActive(Number(event.target.id));
    setId(user.id);
  };

  console.log(id);
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
                active ===  idx 
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
          {album.map((el) => (
            <Card photo={el} author={getAuthor()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
