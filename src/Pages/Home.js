import React, { Component } from 'react';
import NaviBar from '../Components/Navbar/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import Cards from '../Components/Cards/Cards';
import Footer from '../Components/Footer/Footer';
import books from '../Helpers/books';
import Modal from '../Components/Modal/Modal';

import M from 'materialize-css';

class Home extends Component {
  componentDidMount() {
    M.AutoInit();

    const elems = document.querySelectorAll('.carousel');
    const options = {
      duration: 100
    };
    M.Carousel.init(elems, options);
  }

  render() {
    const cardMapping = books.map((book, index) => {
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
    });
    return (
      <div className='home-page'>
        <Modal modalId='addNovelModal' title='Add Novel'></Modal>
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
          <div className='row'>{cardMapping}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
