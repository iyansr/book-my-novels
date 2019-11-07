import React from 'react';

const Modal = props => {
  const { modalId, title } = props;
  return (
    <div id={modalId} className='modal'>
      <div className='modal-content'>
        <h4>{title}</h4>
        <div className='row'>
          <form action='#'>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>person</i>
              <input id='last_name' type='text' className='validate' />
              <label htmlFor='last_name'>Last Name</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input id='second' type='text' className='validate' />
              <label htmlFor='second'>Last Name</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <textarea
                id='third'
                type='text'
                className='materialize-textarea'
              />
              <label htmlFor='third'>Last Name</label>
            </div>
          </form>
        </div>
      </div>
      <div className='modal-footer'>
        <a href='#!' className='modal-close btn-flat yellow'>
          Save
        </a>
      </div>
    </div>
  );
};

export default Modal;
