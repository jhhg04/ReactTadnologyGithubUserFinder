import React from 'react';
import { Link } from 'react-router-dom';
import './Users.css';
import site from '../../assets/site.png';
import location from '../../assets/location.png';
import github from '../../assets/github.png';
import user from '../../assets/user.png';

const Users = () => {
  return (
    <div className='container'>
      <Link to='/' className='back'>
        Back
      </Link>
      <div className='user-information'>
        <div className='image'>
          <img src='https://avatars.githubusercontent.com/u/48237560?v=4' />
        </div>
        <div className='user-content'>
          <h3>Name</h3>
          <p>Lorem</p>
          <div className='more-data'>
            <p>
              <img src={user} />
              20 Followers. Following 10
            </p>
            <p>
              <img src={location} />
              Colombia
            </p>
            <p>
              <img src={site} />
              Portfolio.com
            </p>
            <p>
              <img src={github} />
              <a href='#'>View Profile</a>
            </p>
          </div>
        </div>
      </div>
      <div className='user-repos'>
        <div className='repo'>
          <h3>
            <a href='#'>Name REpo</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            deserunt?
          </p>
          <small>Writen in Js</small>
        </div>
      </div>
    </div>
  );
};

export default Users;
