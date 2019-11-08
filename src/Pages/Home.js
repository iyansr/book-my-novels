import React, { Component } from 'react';
import NaviBar from '../Components/Navbar/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import Cards from '../Components/Cards/Cards';
import Footer from '../Components/Footer/Footer';
import books from '../Helpers/books';
import AddModal from '../Components/Modal/AddModal';

import M from 'materialize-css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      book: [...books]
    };
  }
  componentDidMount() {
    M.AutoInit();

    const elems = document.querySelectorAll('.carousel');
    const options = {
      duration: 100
    };
    M.Carousel.init(elems, options);
  }

  addNovel = novel => {
    const { book } = this.state;

    this.setState({ book: [novel, ...book] });
  };

  render() {
    console.log(this.state.book);

    return (
      <div className='home-page'>
        <AddModal addNovel={this.addNovel} />
        <NaviBar />
        <Carousel />
        <div className='container'>
          <h4
            style={{
              marginBottom: '30px',
              paddingLeft: '10px'
            }}>
            List Novels
          </h4>
          <div className='row'>
            {books.map((book, index) => {
              return (
                <Cards
                  alt={book.title.trim()}
                  to={`details/${index}`}
                  key={index}
                  title={book.title}
                  img={book.image_url}
                  description={book.description}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
