import React, { Component } from 'react';
import NaviBar from '../Components/Navbar/Navbar';
import Cards from '../Components/Cards/Cards';
import Footer from '../Components/Footer/Footer';
import AddModal from '../Components/Modal/AddModal';
import CarouselCard from '../Components/Carousel/Card';
import '../Components/Carousel/Carousel.css';
// import book from '../Helpers/books';

import M from 'materialize-css';
import { connect } from 'react-redux';
import { novels } from '../Public/Redux/Actions/novels';
import { genres } from '../Public/Redux/Actions/genres';
import { status } from '../Public/Redux/Actions/status';
import LoadingOverlay from 'react-loading-overlay';
import swal from 'sweetalert';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      carouSel: [],
      genreDropDown: [],
      statusDropDown: [],
      tempBook: {
        title: '',
        author: '',
        image_url: '',
        description: '',
        novel_status: '1',
        genre: '1',
      },
      btnDisabled: '',
      isOverLay: false,
    };
  }
  async componentDidMount() {
    await this.props.dispatch(novels.getNovels('?'));
    await this.props.dispatch(genres());
    await this.props.dispatch(status());

    this.setState({
      book: this.props.novels.novelData,
      carouSel: this.props.novels.novelData,
      genreDropDown: this.props.genres.genreData,
      statusDropDown: this.props.status.statusData,
    });

    M.AutoInit();
    const elems = document.querySelectorAll('.carousel');
    const options = {
      duration: 100,
    };
    M.Carousel.init(elems, options);
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
      isOverLay: true,
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

    let add = async data => {
      await this.props.dispatch(novels.postNovel(data)).then(() => {
        this.setState({
          isOverLay: false,
        });
        swal({
          icon: 'success',
          title: 'Success Addinng Novel',
        }).then(() => (window.location.href = '/'));
      });
    };
    add(newNovel);
  };

  filterGenre = a => {
    this.state.genreDropDown.filter(async g => {
      if (a.currentTarget.text == g.genre) {
        await this.props.dispatch(novels.getNovels(`?genre=${g.id}`));
        this.setState({
          book: this.props.novels.novelData,
        });
      }
    });
  };

  render() {
    const {
      title,
      author,
      image_url,
      description,
      novel_status,
      genre,
    } = this.state.tempBook;

    return (
      <div className="home-page">
        <NaviBar onClickGenre={this.filterGenre} />

        <LoadingOverlay
          active={this.state.isOverLay}
          spinner
          text="Adding Data..."
        ></LoadingOverlay>

        <div className="carousel">
          {this.state.carouSel.map((book, id) => {
            if (id <= 4) {
              return (
                <CarouselCard
                  alt={book.title.trim()}
                  key={book.id}
                  author={book.author}
                  title={book.title}
                  img={book.image_url}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="container">
          <h4
            style={{
              marginBottom: '30px',
              paddingLeft: '10px',
            }}
          >
            List Novels
          </h4>
          <div className="row">
            {this.state.book.map(book => {
              return (
                <Cards
                  alt={book.title.trim()}
                  to={`details/${book.id}`}
                  key={book.id}
                  title={book.title}
                  img={book.image_url}
                  description={book.description}
                />
              );
            })}
          </div>
        </div>
        <AddModal
          modalTitle="Add Novel"
          modalId="addNovelModal"
          genre={genre}
          title={title}
          author={author}
          image_url={image_url}
          novel_status={novel_status}
          description={description}
          onChange={this.handleChange}
          onSubmit={this.onSubmit.bind(this)}
          sDropDown={this.state.statusDropDown.map(status => {
            return (
              <option key={status.id} value={status.id}>
                {status.novel_status}
              </option>
            );
          })}
          gDropDown={this.state.genreDropDown.map(genre => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.genre}
              </option>
            );
          })}
        />
        <br />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    novels: state.novels,
    postNovel: state.postNovel,
    genres: state.genres,
    status: state.status,
  };
};

export default connect(mapStateToProps)(Home);
