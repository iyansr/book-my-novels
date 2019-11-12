import React, { Component } from 'react';
// import { connect } from 'react-redux';

import M from 'materialize-css';

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      novel_status: []
    };
  }

  componentDidMount() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }

  render() {
    const {
      title,
      author,
      image_url,
      description,
      novel_status,
      genre,
      onChange,
      onSubmit,
      modalId,
      modalTitle,
      disabled,
      gDropDown,
      sDropDown
    } = this.props;

    return (
      <div id={modalId} className='modal'>
        <button className='btn modal-close right btn-floating transparent z-depth-0'>
          <i className='material-icons black-text'>close</i>
        </button>

        <div className='modal-content'>
          <h4>{modalTitle}</h4>
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
                <label className='active' htmlFor='title'>
                  Title
                </label>
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
                <label className='active' htmlFor='author'>
                  Author
                </label>
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
                <label className='active' htmlFor='image_url'>
                  Image Url
                </label>
              </div>
              <div className='input-field col m12'>
                <i className='material-icons prefix'>account_circle</i>
                <select
                  name='novel_status'
                  id='novel_status'
                  type='text'
                  className='validate'
                  placeholder='Status'
                  value={novel_status}
                  onChange={onChange}>
                  {sDropDown}
                </select>
                <label>Select Status</label>
              </div>
              <div className='input-field col m12'>
                <i className='material-icons prefix'>account_circle</i>
                <select
                  name='genre'
                  id='genre'
                  value={genre}
                  onChange={onChange}>
                  {gDropDown}
                </select>
                <label>Select Genre</label>
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
                <label className='active' htmlFor='description'>
                  Description
                </label>
              </div>
              <div className='modal-footer'>
                <button
                  type='submit'
                  className={`btn modal-close waves-effect waves-light ${disabled}`}
                  style={{ marginBottom: '20px' }}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddModal;
