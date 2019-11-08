import React from 'react';
import { Link } from 'react-router-dom';

const DetailNav = props => {
  const { index, swalClick, to } = props;
  return (
    <nav className='transparent z-depth-0'>
      <div className='nav-wrapper transparent z-depth-0'>
        <Link
          to={to}
          className='btn-floating btn-large transparent z-depth-0'
          style={{
            margin: '10px 0 0 20px'
          }}>
          <i className='material-icons'>arrow_back</i>
        </Link>

        <ul className='right'>
          <li>
            <a
              className='modal-trigger'
              data-target='editNovelModal'
              href={`${index}#`}
              style={{
                fontWeight: 'bolder',
                fontSize: '24px',
                textShadow: '2px 2px black'
              }}>
              Edit
            </a>
          </li>
          <li>
            <a
              href={`${index}#`}
              style={{
                fontWeight: 'bolder',
                fontSize: '24px',
                textShadow: '2px 2px black'
              }}
              onClick={swalClick}>
              Delete
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DetailNav;
