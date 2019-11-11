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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      tempBook: {
        title: '',
        author: '',
        image_url: '',
        description: '',
        novel_status: '1',
        genre: '1'
      }
    };
  }
  async componentDidMount() {
    await this.props.dispatch(novels.getNovels());

    this.setState({
      book: this.props.novels.novelData
    });

    M.AutoInit();
    const elems = document.querySelectorAll('.carousel');
    const options = {
      duration: 100
    };
    M.Carousel.init(elems, options);
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      tempBook: { ...this.state.tempBook, [name]: value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      title,
      author,
      image_url,
      description,
      novel_status,
      genre
    } = this.state.tempBook;

    const newNovel = {
      title,
      author,
      image_url,
      description,
      novel_status,
      genre
    };

    let add = async data => {
      await this.props
        .dispatch(novels.postNovel(data))
        .then(() => (window.location.href = '/'));
    };
    add(newNovel);
  };

  render() {
    console.log({ book: this.state.book });
    const {
      title,
      author,
      image_url,
      description,
      novel_status,
      genre
    } = this.state.tempBook;

    return (
      <div className='home-page'>
        <NaviBar />

        <div className='carousel'>
          {this.state.book.map(book => {
            return (
              <CarouselCard
                alt={book.title.trim()}
                key={book.id}
                author={book.author}
                title={book.title}
                img={book.image_url}
              />
            );
          })}
        </div>
        <div className='container'>
          <h4
            style={{
              marginBottom: '30px',
              paddingLeft: '10px'
            }}>
            List Novels
          </h4>
          <div className='row'>
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
          modalTitle='Add Novel'
          modalId='addNovelModal'
          genre={genre}
          title={title}
          author={author}
          image_url={image_url}
          novel_status={novel_status}
          description={description}
          onChange={this.handleChange}
          onSubmit={this.onSubmit.bind(this)}
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
    postNovel: state.postNovel
  };
};

export default connect(mapStateToProps)(Home);
