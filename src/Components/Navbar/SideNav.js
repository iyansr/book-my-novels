import React from 'react';

const SideNav = () => {
  return (
    <ul id='slide-out' className='sidenav'>
      <li>
        <div className='center black-text' style={{ marginTop: '10px' }}>
          <img
            src='https://avatarfiles.alphacoders.com/149/149714.jpg'
            alt='tony'
            height='200'
            width='200'
            className='circle'
          />
          <h5>Tony Stark</h5>
        </div>
      </li>
      <br />
      <li>
        <a href='/#'>
          <i className='material-icons'>explore</i>Explore
        </a>
      </li>
      <li>
        <a href='/#'>
          <i className='material-icons'>history</i>History
        </a>
      </li>
      <li>
        <a href='/#' data-target='addNovelModal' className='modal-trigger'>
          <i className='material-icons '>library_add</i>Add Novel
        </a>
      </li>
    </ul>
  );
};

export default SideNav;
