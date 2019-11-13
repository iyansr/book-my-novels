import React from 'react';
import './Carousel.css';

const CarouselCard = props => {
  const { img, alt, title, author } = props;
  return (
    <div
      className='card  carousel-card carousel-item z-depth-5'
      style={{ borderRadius: '12px' }}>
      <div className='card-image '>
        <img className='custom-card-img' src={img} alt={alt} />
        <div className='card-title custom-title'>
          <div className='title-text-carousel'>{title}</div>
          <span style={{ fontWeight: 'lighter' }}>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
