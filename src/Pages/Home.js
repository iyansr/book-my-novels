import React, { Component } from 'react';
import NaviBar from '../Components/Navbar/Navbar';
import Cards from '../Components/Cards/Cards';
import Footer from '../Components/Footer/Footer';
import AddModal from '../Components/Modal/AddModal';
import CarouselCard from '../Components/Carousel/Card';
import '../Components/Carousel/Carousel.css';

import M from 'materialize-css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: props.book,
      tempBook: {
        title: '',
        author: '',
        image_url: '',
        date: '',
        year: '',
        description: '',
        status: '',
        genre: ''
      }
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    M.AutoInit();

    if (this.props.location.state) {
      const { newBook, isEdit, isDelete } = this.props.location.state;

      if (isEdit) {
        this.setState({
          book: newBook
        });
      }
      if (isDelete) {
        this.setState({
          book: newBook
        });
      }
    }

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

  onClick = e => {
    e.preventDefault();
    const {
      title,
      author,
      image_url,
      date,
      year,
      description,
      status
    } = this.state.tempBook;

    const newNovel = {
      title,
      author,
      image_url,
      date,
      year,
      description,
      status
    };

    this.setState({
      book: [...this.state.book, newNovel]
    });

    const elems = document.querySelectorAll('.carousel');
    const options = {
      duration: 100
    };
    M.Carousel.init(elems, options);

    console.log('onclick');
    console.log(this.state.book);
  };

  render() {
    console.log(this.state.book);

    return (
      <div className='home-page'>
        <NaviBar />

        <div className='carousel' id='myCarousel'>
          {this.state.book.map((novel, index) => {
            return (
              <CarouselCard
                alt={novel.title.trim()}
                key={index}
                author={novel.author}
                title={novel.title}
                img={novel.image_url}
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
            {this.state.book.map((book, index) => {
              return (
                <Cards
                  alt={book.title.trim()}
                  to={{
                    pathname: `details/${index}`,
                    state: {
                      book: this.state.book,
                      isEdit: false
                    }
                  }}
                  key={index}
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
          genre={this.state.tempBook.genre}
          title={this.state.tempBook.title}
          author={this.state.tempBook.author}
          image_url={this.state.tempBook.image_url}
          date={this.state.tempBook.date}
          year={this.state.tempBook.year}
          description={this.state.tempBook.description}
          status={this.state.tempBook.status}
          onChange={this.handleChange}
          onSubmit={this.onClick}
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
