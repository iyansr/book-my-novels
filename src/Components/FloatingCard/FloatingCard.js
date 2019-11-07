import React from 'react';

const FloatingCard = props => {
  return (
    <div className='card right z-depth-4 detail-card-right'>
      <div className='card-image'>
        <img
          src={props.image_url}
          style={{ borderRadius: '12px' }}
          alt={props.alt}
        />
      </div>
    </div>
  );
};
export default FloatingCard;
