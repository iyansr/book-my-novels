import React, { Component } from 'react';
import '../Styles/Style.css';
// import M from 'materialize-css';
import DetailNav from '../Components/DetailNav/DetailNav';
import FloatingCard from '../Components/FloatingCard/FloatingCard';
import ContainerDetail from '../Components/ContainerDetail/ContainerDetail';
import books from '../Helpers/books';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      book: books[0],
      id: 0
    };
  }

  componentDidMount() {
    const { id_book } = this.props.match.params;

    this.setState({
      book: books[id_book],
      id: id_book
    });
    console.log(books[id_book]);
  }
  render() {
    const { title, description, image_url, date, status } = this.state.book;
    const btnStatus = status === 'Available' ? '' : 'disabled';
    return (
      <div>
        <div
          className='top-cover'
          style={{
            backgroundImage: `url('${image_url}')`
          }}>
          <DetailNav />
          <FloatingCard image_url={image_url} />

          <button
            className={`btn-large ${btnStatus} z-depth-3 right btn-borrow`}>
            Borrow
          </button>
        </div>
        {/* asdads */}
        <ContainerDetail
          desc={description}
          title={title}
          date={date}
          status={status}
        />
        <div className='fixed-action-btn'>
          <a
            href={`/details/${this.state.id}#`}
            className='btn-floating btn-large'>
            <i className='large material-icons'>add</i>
          </a>
        </div>
      </div>
    );
  }
}
export default Details;
