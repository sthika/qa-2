import React from 'react';

const CollectionMobile = ({ users, setId, id }) => {
  console.log(id);
  return (
    <div className='collection__types-mobile'>
      <label for='users'>Choose an author:</label>
      <select
        name='users'
        id='users'
        form='users'
        onChange={(e) => {
          // console.log(e.target.value)
          setId(Number(e.target.value));
        }}>
        {users.map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CollectionMobile;
