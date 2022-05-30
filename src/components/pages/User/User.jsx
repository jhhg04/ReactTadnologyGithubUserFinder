import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './User.css';
import site from '../../../assets/site.png';
import location from '../../../assets/location.png';
import github from '../../../assets/github.png';
import user from '../../../assets/user.png';
import axios from '../../../axios';
import Repo from '../../ui/Repo/Repo';

const User = () => {
  const { login } = useParams();
  // user Info
  const [userInfo, setUserInfo] = useState([]);
  // user Repos
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos`),
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInformation();
  }, []);
  return (
    <div className='container'>
      <Link to='/' className='back'>
        Back
      </Link>
      <div className='user-information'>
        <div className='image'>
          <img src={userInfo?.avatar_url} />
        </div>
        <div className='user-content'>
          <h3>{userInfo?.name}</h3>
          <p>{userInfo?.bio}</p>
          <div className='more-data'>
            <p>
              <img src={user} />
              {userInfo?.followers} Followers. Following {userInfo?.following}
            </p>
            {userInfo?.location && (
              <p>
                <img src={location} />
                {userInfo?.location}
              </p>
            )}
            {userInfo?.blog && (
              <p>
                <img src={site} />
                {userInfo?.blog}
              </p>
            )}
            <p>
              <img src={github} />
              <a href={userInfo?.html_url}>View Profile</a>
            </p>
          </div>
        </div>
      </div>
      <div className='user-repos'>
        {repos ? (
          repos.map((repo) => {
            return <Repo repo={repo} key={repo.id} />;
          })
        ) : (
          <h2>No Repos for this User</h2>
        )}
      </div>
    </div>
  );
};

export default User;
