import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Cards = props => {
  const { img, to, title, description, alt } = props;
  return (
    <div className='col s12 m4'>
      <div
        className='card z-depth-3'
        style={{
          borderRadius: '12px'
        }}>
        <div className='card-image'>
          <img
            alt={alt}
            src={img}
            style={{
              width: '100%',
              height: '15rem',
              objectFit: 'cover',
              borderRadius: '12px 12px 0 0'
            }}
          />
        </div>
        <div
          className='card-content'
          style={{
            height: '200px'
          }}>
          <Link
            className='black-text'
            to={to}
            style={{
              fontWeight: 'bold',
              fontSize: '1.3em'
            }}>
            {title}
          </Link>
          <p className='block-with-text '>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
