import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='container'>
      <div className='search-form'>
        <h2>Github Search User</h2>
        <form>
          <input type='text' />
          <button>Search</button>
        </form>
      </div>
      <div className='search-results'>
        <div className='user'>
          <div className='image'>
            <img src='https://avatars.githubusercontent.com/u/48237560?v=4' />
          </div>
          <div className='user-info'>
            <h3>Name User</h3>
            <small>ID</small>
            <a href=''>View</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
