import React from 'react';
import CarouselCard from './Card';
import './Carousel.css';
import books from '../../Helpers/books';

const Carousel = () => {
  const carouselMap = books.map((book, index) => {
    return (
      <CarouselCard
        alt={book.title.trim()}
        key={index}
        author={book.author}
        title={book.title}
        img={book.image_url}
      />
    );
  });

  return (
    <div className='carousel' id='myCarousel'>
      {carouselMap}
    </div>
  );
};

export default Carousel;
