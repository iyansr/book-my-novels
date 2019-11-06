import React from 'react';

const ContainerDetail = props => {
  const { desc, title } = props;
  return (
    <div className='left detail-container'>
      <h5 className='right light-green-text text-accent-4 text-status'>
        Available
      </h5>
      <a className='btn z-depth-0'>Comedy</a>
      <h4>{title}</h4>
      <span style={{ fontWeight: 'bold' }}>Agustus 2017</span>
      <p
        style={{
          marginTop: '20px'
        }}>
        {desc}
      </p>
    </div>
  );
};

export default ContainerDetail;
