import React from 'react';
import { Link } from 'react-router-dom';

const DetailNav = () => {
  return (
    <nav className='transparent z-depth-0'>
      <div className='nav-wrapper transparent z-depth-0'>
        <Link
          to='/'
          className='btn-floating btn-large transparent z-depth-0'
          style={{
            margin: '10px 0 0 20px'
          }}>
          <i className='material-icons'>arrow_back</i>
        </Link>

        <ul className='right'>
          <li>
            <a href='#'>Edit</a>
          </li>
          <li>
            <a href='#'>Delete</a>
          </li>
        </ul>
      </div>
      {/*id='nav-mobile' className='right hide-on-med-and-down'*/}
    </nav>
  );
};

export default DetailNav;
