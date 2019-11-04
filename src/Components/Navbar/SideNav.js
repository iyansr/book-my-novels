import React from 'react';

const SideNav = () => {
  return (
    <ul id='slide-out' className='sidenav'>
      <li>
        <div className='user-view'>
          <a href='/#'>
            <img className='circle' src='images/yuna.jpg' alt='yuna' />
          </a>
          <a href='/#'>
            <span className='white-text name'>John Doe</span>
          </a>
          <a href='/#'>
            <span className='white-text email'>jdandturk@gmail.com</span>
          </a>
        </div>
      </li>
      <li>
        <a href='/#'>
          <i className='material-icons'>cloud</i>First Link With Icon
        </a>
      </li>
      <li>
        <a href='/#'>Second Link</a>
      </li>
      <li>
        <div className='divider'></div>
      </li>
      <li>
        <a href='/#' className='subheader'>
          Subheader
        </a>
      </li>
      <li>
        <a className='waves-effect' href='/#'>
          Third Link With Waves
        </a>
      </li>
    </ul>
  );
};

export default SideNav;
