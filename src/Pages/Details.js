import React, { Component } from 'react';
import '../Styles/Style.css';
import M from 'materialize-css';
import DetailNav from '../Components/DetailNav/DetailNav';
import FloatingCard from '../Components/FloatingCard/FloatingCard';
import ContainerDetail from '../Components/ContainerDetail/ContainerDetail';
import AddModal from '../Components/Modal/AddModal';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { novels } from '../Public/Redux/Actions/novels';
import Axios from 'axios';

class Details extends Component {
  constructor(props) {
    super(props);
    const { novelData } = this.props.novels;

    const { id_book } = this.props.match.params;
    this.state = {
      book: novelData.filter(data => data.id == id_book)[0],
      tempBook: {
        ...novelData.filter(data => data.id == id_book)[0],
        novel_status: '1',
        genre: '1',
      },
      genreDropDown: this.props.genres.genreData,
      statusDropDown: this.props.status.statusData,
      btnDisabled: '',
    };
  }

  componentDidMount() {
    M.AutoInit();
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      tempBook: { ...this.state.tempBook, [name]: value },
    });
  };

  onSubmit = e => {
    this.setState({
      btnDisabled: 'disabled',
    });
    e.preventDefault();
    const {
      title,
      author,
      image_url,
      description,
      novel_status,
      genre,
    } = this.state.tempBook;

    const newNovel = {
      title,
      author,
      image_url,
      description,
      novel_status,
      genre,
    };

    const { id_book } = this.props.match.params;

    let putNovel = async (data, id) => {
      await this.props.dispatch(novels.editNovel(data, id)).then(() => {
        swal({
          title: 'Succes Update',
          text: `${this.state.book.title} has been updated !`,
          icon: 'success',
        }).then(() => (window.location.href = '/'));
      });
    };

    putNovel(newNovel, id_book);

    console.log({ submit: newNovel });
  };

  deleteHandler = () => {
    const { id_book } = this.props.match.params;

    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this novel!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async willDelete => {
      if (willDelete) {
        await this.props.dispatch(novels.deleteNovel(id_book)).then(() =>
          swal('Poof! Novel has been deleted!', {
            icon: 'success',
          }).then(() => (window.location.href = '/'))
        );
      } else {
        swal('Novel is safe!');
      }
    });
  };

  render() {
    if (typeof this.state.book === 'undefined') {
      return <Redirect to="/" />;
    } else {
      const {
        title,
        author,
        image_url,
        description,
        novel_status,
        genre,
        id,
      } = this.state.book;
      const btnStatus = novel_status === 'Available' ? '' : 'disabled';
      return (
        <div>
          <div
            className="top-cover"
            style={{
              backgroundImage: `url('${image_url}')`,
            }}
          >
            <DetailNav onDelete={this.deleteHandler} to="/" index={id} />
            <FloatingCard image_url={image_url} alt={title} />

            <button
              className={`btn-large ${btnStatus} z-depth-3 right btn-borrow`}
            >
              Borrow
            </button>
          </div>
          <AddModal
            modalTitle="Edit Novel"
            modalId="editNovelModal"
            genre={this.state.tempBook.genre}
            title={this.state.tempBook.title}
            author={this.state.tempBook.author}
            image_url={this.state.tempBook.image_url}
            novel_status={this.state.tempBook.novel_status}
            description={this.state.tempBook.description}
            onChange={this.handleChange.bind(this)}
            onSubmit={this.onSubmit.bind(this)}
            disabled={this.state.btnDisabled}
            sDropDown={this.props.status.statusData.map(status => {
              return (
                <option key={status.id} value={status.id}>
                  {status.novel_status}
                </option>
              );
            })}
            gDropDown={this.props.genres.genreData.map(genre => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.genre}
                </option>
              );
            })}
          />
          {/* asdads */}
          <ContainerDetail
            index={id}
            desc={description}
            title={title}
            status={novel_status}
            genre={genre}
            author={author}
          />
          <div className="fixed-action-btn">
            <button className={`btn-floating btn-large ${btnStatus}`}>
              <i className="large material-icons">add</i>
            </button>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    novels: state.novels,
    editNovel: state.editNovel,
    deleteNovel: state.deleteNovel,
    genres: state.genres,
    status: state.status,
  };
};

export default connect(mapStateToProps)(Details);
