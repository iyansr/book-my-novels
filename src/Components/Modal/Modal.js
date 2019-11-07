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
              <input
                id='title'
                type='text'
                className='validate'
                placeholder='Title'
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                id='image_url'
                type='text'
                className='validate'
                placeholder='Author'
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                id='image_url'
                type='text'
                className='validate'
                placeholder='Image URL'
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                id='image_url'
                type='text'
                className='validate'
                placeholder='Date'
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <select name='status' id='status'>
                <option value='0'>Empty</option>
                <option value='1'>Available</option>
              </select>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                id='image_url'
                type='text'
                className='validate'
                placeholder='Year'
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <textarea
                id='third'
                type='text'
                className='materialize-textarea'
                placeholder='Description'
              />
            </div>
          </form>
        </div>
      </div>
      <div className='modal-footer'>
        <button
          className='modal-close btn-flat yellow'
          style={{ marginRight: '20px' }}>
          Close
        </button>
        <button className='modal-close btn-flat yellow'>Save</button>
      </div>
    </div>
  );
};

export default Modal;
