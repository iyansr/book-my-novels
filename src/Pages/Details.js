import React, { Component } from 'react';
import '../Styles/Style.css';
import M from 'materialize-css';
import DetailNav from '../Components/DetailNav/DetailNav';
import FloatingCard from '../Components/FloatingCard/FloatingCard';
import ContainerDetail from '../Components/ContainerDetail/ContainerDetail';
import AddModal from '../Components/Modal/AddModal';
import swal from 'sweetalert';

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
      isEdit: false
    };
  }

  componentDidMount() {
    M.AutoInit();

    const { id_book } = this.props.match.params;
    const { book } = this.props.location.state;
    console.log({ book: book });

    this.setState({
      book,
      id: id_book,
      detail: book[id_book]
    });
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

  swalClick(t) {
    swal('Succes Delete', `Succes Delete ${t}`, 'success');
  }

  render() {
    console.log({ newbook: this.state.book });

    const {
      title,
      description,
      image_url,
      date,
      status,
      author,
      year,
      genre
    } = this.state.detail;
    const btnStatus = status === 'Available' ? '' : 'disabled';
    return (
      <div>
        <div
          className='top-cover'
          style={{
            backgroundImage: `url('${image_url}')`
          }}>
          <DetailNav
            to={{
              pathname: '/',
              state: {
                newBook: this.state.book,
                isEdit: this.state.isEdit
              }
            }}
            index={this.state.id}
            swalClick={() => {
              this.swalClick(title);
            }}
          />
          <FloatingCard image_url={image_url} alt={title.trim()} />

          <button
            className={`btn-large ${btnStatus} z-depth-3 right btn-borrow`}>
            Borrow
          </button>
        </div>
        <AddModal
          modalId='editNovelModal'
          genre={genre}
          title={title}
          author={author}
          image_url={image_url}
          date={date}
          year={year}
          description={description}
          status={status}
          onChange={this.handleChange}
          onSubmit={this.onClick}
        />
        {/* asdads */}
        <ContainerDetail
          index={this.state.id}
          desc={description}
          title={title}
          date={date}
          status={status}
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
export default Details;
