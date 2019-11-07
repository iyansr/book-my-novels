import React, { Component } from 'react';
import '../Styles/Style.css';
import M from 'materialize-css';
import DetailNav from '../Components/DetailNav/DetailNav';
import FloatingCard from '../Components/FloatingCard/FloatingCard';
import ContainerDetail from '../Components/ContainerDetail/ContainerDetail';
import books from '../Helpers/books';
import Modal from '../Components/Modal/Modal';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: '',
        description: '',
        image_url: '',
        date: '',
        status: '',
        author: '',
        year: ''
      },
      id: 0
    };
  }

  componentDidMount() {
    M.AutoInit();

    const { id_book } = this.props.match.params;

    this.setState({
      book: books[id_book],
      id: id_book
    });
  }

  render() {
    const {
      title,
      description,
      image_url,
      date,
      status,
      author,
      year
    } = this.state.book;
    const btnStatus = status === 'Available' ? '' : 'disabled';
    const statusVal = status === 'Available' ? 1 : 0;
    return (
      <div>
        <div
          className='top-cover'
          style={{
            backgroundImage: `url('${image_url}')`
          }}>
          <DetailNav index={this.state.id} />
          <FloatingCard image_url={image_url} alt={title.trim()} />
          <Modal
            modalId='editNovelModal'
            title='Edit Novel'
            author={author}
            novelTitle={title}
            image_url={image_url}
            date={date}
            bookStatus={statusVal}
            year={year}
            description={description}
          />
          <button
            className={`btn-large ${btnStatus} z-depth-3 right btn-borrow`}>
            Borrow
          </button>
        </div>
        {/* asdads */}
        <ContainerDetail
          index={this.state.id}
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
