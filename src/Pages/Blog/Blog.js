import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './blog.css';
import Button from '../../components/Button';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [list, setList] = useState([]);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setList(data.filter((el) => el.id <= 3));
    };
    getData();
  }, []);

  const addNewOne = async () => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      data: JSON.stringify({
        title: title,
        body: desc,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    setList([...list, data]);
    setMyList(list.filter((el) => el.id > 100))
  };

  const deleteData = async (id) => {
    await axios(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    console.log(list);
    const newList = list.filter((i) => i.id !== id);
    setList(newList);
  };

  return (
    <section className='blog'>
      <div className='container'>
        <h2 className='section__title'>All posts</h2>
        <p className="section__subtitle">jsonplaceholder</p>

        <div className='blog__form '>
          <div className='contact__form-wrap'>
            <input
              onInput={(e) => {
                setTitle(e.target.value);
              }}
              type='text'
              name='name'
              className='contact__form-input'
              placeholder='Title'
            />
          </div>
          <div className='contact__form-wrap'>
          <input
            onInput={(e) => {
              setDesc(e.target.value);
            }}
            type='text'
            name='name'
            className='contact__form-input'
            placeholder='Description'
          />
        </div>
        <button
          onClick={() => {
            addNewOne();
          }}
          className='form__btn'>
          Add new
        </button>
        </div>
        

        <div className='blog__posts'>

          {list.map((el, index) => (
            <div className='blog__post'>
              <div className='blog__post-desc'>
                <h3 className='blog__post-title'>{el.title}</h3>
                <p className='blog__post-subtitle'>{el.body}</p>
              </div>
              <div
                className='blog__icon'
                onClick={() => {
                  deleteData(el.id);
                }}>
                &times;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
