import React, { Component } from 'react';
import '../Styles/Style.css';
import M from 'materialize-css';
import DetailNav from '../Components/DetailNav/DetailNav';
import FloatingCard from '../Components/FloatingCard/FloatingCard';
import ContainerDetail from '../Components/ContainerDetail/ContainerDetail';
import AddModal from '../Components/Modal/AddModal';
import AlertModal from '../Components/Modal/AlertModal';

import { connect } from 'react-redux';
import { novels } from '../Public/Redux/Actions/novels';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      id: 0,
      detail: {
        title: '',
        author: '',
        image_url: '',
        date: '',
        year: '',
        description: '',
        status: '',
        genre: ''
      },
      isEdit: false,
      isDelete: false
    };
  }

   async componentDidMount() {
    M.AutoInit();

    const { id_book } =  this.props.match.params;
    console.log('id book', id_book)
    await this.props.dispatch(novels.getNovelsById(id_book));

    this.setState({
      book: this.props.novelsId.novelDataId
    });


    // if (this.props.match.params) {
    //   const { book, isEdit } = this.props.location.state;
    //   console.log({ book: book });

    //   this.setState({
    //     book,
    //     id: id_book,
    //     detail: book[id_book],
    //     isEdit
    //   });
    // }



  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      detail: { ...this.state.detail, [name]: value }
    });
  };

  onClick = e => {
    e.preventDefault();
    const {
      title,
      author,
      image_url,
      date,
      year,
      description,
      status,
      genre
    } = this.state.detail;

    const newNovel = {
      title,
      author,
      image_url,
      date,
      year,
      description,
      status,
      genre
    };
    const { id_book } = this.props.match.params;
    const tempArray = this.state.book.slice();
    tempArray[id_book] = newNovel;

    this.setState({
      book: tempArray,
      isEdit: true
    });
  };

  deleteHandler = () => {
    const { id_book } = this.props.match.params;
    const tempArray = this.state.book.slice();
    tempArray.splice(id_book, 1);
    this.setState({
      book: tempArray
    });
  };

  render() {
    console.log({ newbook: this.state.book });
    // console.log({ isDelete: this.state.isDelete });
    // console.log({ isEdit: this.state.isEdit });

    const {
      title,
      description,
      image_url,
      date,
      novel_status,
      author,
      year,
      genre
    } = this.state.book;
    const btnStatus = novel_status === 'Available' ? '' : 'disabled';
    return (
      <div>
        <div
          className='top-cover'
          style={{
            backgroundImage: `url('${image_url}')`
          }}
        >
          <DetailNav
            onClick={this.deleteHandler}
            to={{
              pathname: '/',
              state: {
                newBook: this.state.book,
                isEdit: this.state.isEdit
              }
            }}
            index={this.state.id}
          />
          <FloatingCard image_url={image_url} alt={title} />

          <button
            className={`btn-large ${btnStatus} z-depth-3 right btn-borrow`}
          >
            Borrow
          </button>
        </div>
        <AlertModal
          title={title}
          to={{
            pathname: '/',
            state: {
              newBook: this.state.book,
              isDelete: true
            }
          }}
        />
        <AddModal
          modalTitle='Edit Novel'
          modalId='editNovelModal'
          genre={genre}
          title={title}
          author={author}
          image_url={image_url}
          date={date}
          year={year}
          description={description}
          status={novel_status}
          onChange={this.handleChange}
          onSubmit={this.onClick}
        />
        {/* asdads */}
        <ContainerDetail
          index={this.state.id}
          desc={description}
          title={title}
          date={date}
          status={novel_status}
          genre={genre}
        />
        <div className='fixed-action-btn'>
          <button className={`btn-floating btn-large ${btnStatus}`}>
            <i className='large material-icons'>add</i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    novelsId: state.novelsId
  };
};

export default connect(mapStateToProps)(Details)
