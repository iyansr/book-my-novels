import React, { Component } from 'react';
import { connect } from 'react-redux';
import { genres } from '../../Public/Redux/Actions/genres';

import M from 'materialize-css';

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selectedGenre: ''
    };
  }

  async componentDidMount() {
    await this.props.dispatch(genres());
    this.setState({
      genres: this.props.genres.genreData
    });

    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }

  render() {
    console.log({ genres: this.state.genres });

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
      modalTitle
    } = this.props;
    return (
      <div id={modalId} className='modal'>
        <div className='modal-content'>
          <h4>{modalTitle}</h4>
          {/* <a className='btn-floating btn-large waves-effect waves-light red'>
            <i className='material-icons'>add</i>
          </a> */}
          <div className='row'>
            <form
              onSubmit={onSubmit}
              method={
                modalId === 'addNovelModal'
                  ? 'POST'
                  : modalId === 'editNovelModal'
                  ? 'PUT'
                  : ''
              }>
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
                <input
                  name='novel_status'
                  id='novel_status'
                  type='text'
                  className='validate'
                  placeholder='Genre'
                  value={novel_status}
                  onChange={onChange}
                />
                <label className='active' htmlFor='genre'>
                  Status
                </label>
              </div>
              <div className='input-field col m12'>
                <i className='material-icons prefix'>account_circle</i>
                <select
                  name='genre'
                  id='genre'
                  value={genre}
                  onChange={onChange}>
                  {this.state.genres.map(genre => {
                    return (
                      <option key={genre.id} value={genre.id}>
                        {genre.genre}
                      </option>
                    );
                  })}
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
                  className='modal-close btn waves-effect waves-light'
                  style={{ marginBottom: '20px' }}>
                  Save
                </button>
              </div>
            </form>
            {/* <button
              className='modal-close btn-flat yellow'
              style={{ marginRight: '20px' }}>
              Close
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres: state.genres
  };
};

export default connect(mapStateToProps)(AddModal);
