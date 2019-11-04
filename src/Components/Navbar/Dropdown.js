import React from 'react';

const DropDownItems = props => {
  return (
    <ul id={props.id} className='dropdown-content'>
      {props.children}
    </ul>
  );
};

export default DropDownItems;
