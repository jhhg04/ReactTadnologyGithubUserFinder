import React, { useState } from 'react';
import axios from '../../axios';
import User from '../User/User';
import './Home.css';

const Home = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get('/search/users?q=' + query);
      return data?.items;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log('Your quuery is empty...');
    }
  };
  return (
    <div className='container'>
      <div className='search-form'>
        <h2>Github Search User</h2>
        <form>
          <input value={query} onChange={handleQueryInput} type='text' />
          <button onClick={handleSearchUsers}>Search</button>
        </form>
      </div>
      <div className='search-results'>
        <div className='more-options'>
          <label>
            <small>Per Page</small>
            <select>
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='50'>50</option>
              <option value='100'>100</option>
            </select>
          </label>
          <div className='pagination'>
            <button>1</button>
            <button>2</button>
          </div>
        </div>
        {users ? (
          users.map((user) => {
            return <User user={user} key={user.id} />;
          })
        ) : (
          <h2>There is nothing to display....</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
