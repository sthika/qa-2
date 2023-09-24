import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Collection = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    let { data } = await axios(`https://jsonplaceholder.typicode.com/users`);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <section className='collection section'>
      <div className='container'>
        <h2 className='section__title'>Collection</h2>
        <p className='section__subtitle'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className='collections__types'>
          {/* Вместо категорий использовала юзеров */}
          {users.map((user) => (
            <a className='collection__user'>{user.name}</a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
