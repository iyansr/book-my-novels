import React from 'react';

const AddModal = props => {
  const {
    title,
    author,
    image_url,
    date,
    year,
    description,
    status,
    onChange,
    onSubmit
  } = props;
  return (
    <div id='addNovelModal' className='modal'>
      <div className='modal-content'>
        <h4>Add Novel</h4>
        <div className='row'>
          <form onSubmit={onSubmit}>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>person</i>
              <input
                name='title'
                id='title'
                type='text'
                className='validate'
                placeholder='Title'
                value={title}
                onChange={onChange}
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>person</i>
              <input
                name='author'
                id='author'
                type='text'
                className='validate'
                placeholder='Author'
                value={author}
                onChange={onChange}
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                name='image_url'
                id='image_url'
                type='text'
                className='validate'
                placeholder='Image URL'
                value={image_url}
                onChange={onChange}
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                name='date'
                id='date'
                type='text'
                className='validate'
                placeholder='Date'
                value={date}
                onChange={onChange}
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                name='status'
                id='status'
                type='text'
                className='validate'
                placeholder='Status'
                value={status}
                onChange={onChange}
              />
            </div>

            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                name='year'
                id='year'
                type='text'
                className='validate'
                placeholder='Year'
                value={year}
                onChange={onChange}
              />
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_circle</i>
              <textarea
                name='description'
                id='description'
                type='text'
                className='materialize-textarea'
                placeholder='Description'
                value={description}
                onChange={onChange}
              />
            </div>
            <div className='modal-footer'>
              <button type='submit' className='btn waves-effect waves-light'>
                Save
              </button>
            </div>
          </form>
          <button
            className='modal-close btn-flat yellow'
            style={{ marginRight: '20px' }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
