import React from 'react';
import { Link } from 'react-router-dom';

const AlertModal = props => {
  return (
    <div id='modalAlert' className='modal'>
      <div className='modal-content'>
        <h4 align='center'>Succes Delete</h4>
        <p align='center'>Succes Delete {props.title}</p>
      </div>
      <div className='modal-footer'>
        <Link to={props.to} className='modal-close btn'>
          Ok
        </Link>
      </div>
    </div>
  );
};

export default AlertModal;
