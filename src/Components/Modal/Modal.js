import React from 'react';

const Modal = props => {
  const {
    modalId,
    title,
    author,
    novelTitle,
    image_url,
    date,
    bookStatus,
    year,
    description
  } = props;
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
                defaultValue={novelTitle}
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>person</i>
              <input
                id='author'
                type='text'
                className='validate'
                placeholder='Author'
                defaultValue={author}
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                id='image_url'
                type='text'
                className='validate'
                placeholder='Image URL'
                defaultValue={image_url}
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                id='date'
                type='text'
                className='validate'
                placeholder='Date'
                defaultValue={props}
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <select name='status' id='status' defaultValue={bookStatus}>
                <option value='0'>Empty</option>
                <option value='1'>Available</option>
              </select>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                id='year'
                type='text'
                className='validate'
                placeholder='Year'
                defaultValue={year}
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <textarea
                id='description'
                type='text'
                className='materialize-textarea'
                placeholder='Description'
                defaultValue={description}
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
