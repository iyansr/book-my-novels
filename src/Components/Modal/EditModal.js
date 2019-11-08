import React, { Component } from 'react';

class EditModal extends Component {
  constructor() {
    super();
    this.state = {
      book: {
        title: '',
        author: '',
        image_url: '',
        date: '',
        year: '',
        description: '',
        status: ''
      }
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      book: { ...this.state.book, [name]: value }
    });
  };

  render() {
    const {
      title,
      author,
      image_url,
      date,
      year,
      description,
      status,
      onClick,
      handleChange
    } = this.props;
    return (
      <div id='editNovelModal' className='modal'>
        <div className='modal-content'>
          <h4>Add Novel</h4>
          <div className='row'>
            <form>
              <div className='input-field col m12'>
                <i className='material-icons prefix'>person</i>
                <input
                  name='title'
                  id='title'
                  type='text'
                  className='validate'
                  placeholder='Title'
                  value={title}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
          <button onClick={onClick} className='btn waves-effect waves-light'>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default EditModal;
