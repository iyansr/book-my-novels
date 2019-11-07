import React from 'react';
import { Link } from 'react-router-dom';

const DetailNav = props => {
  const { index } = props;
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
            <a href={`${index}#`}>Edit</a>
          </li>
          <li>
            <a href={`${index}#`}>Delete</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DetailNav;
