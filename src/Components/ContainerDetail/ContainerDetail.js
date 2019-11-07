import React from 'react';

const ContainerDetail = props => {
  const { desc, title, date, status } = props;

  const color =
    status === 'Available' ? 'light-green-text text-accent-4' : 'red-text';

  return (
    <div className='left detail-container'>
      <h5 className={`right ${color} text-status`}>{status}</h5>
      <a className='btn z-depth-0'>Comedy</a>
      <h4>{title}</h4>
      <span style={{ fontWeight: 'bold' }}>{date}</span>
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
