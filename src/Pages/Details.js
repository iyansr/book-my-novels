import React, { Component } from 'react';
import '../Styles/Style.css';
import M from 'materialize-css';
import DetailNav from '../Components/DetailNav/DetailNav';
import FloatingCard from '../Components/FloatingCard/FloatingCard';
import ContainerDetail from '../Components/ContainerDetail/ContainerDetail';
import books from '../Helpers/books';
import EditModal from '../Components/Modal/EditModal';
import swal from 'sweetalert';

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
      id: 0,
      testBook: books
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

  onClick(e) {
    e.preventDefault();
    this.setState({});
  }

  swalClick(t) {
    swal('Succes Delete', `Succes Delete ${t}`, 'success');
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
    return (
      <div>
        <div
          className='top-cover'
          style={{
            backgroundImage: `url('${image_url}')`
          }}>
          <DetailNav
            index={this.state.id}
            swalClick={() => {
              this.swalClick(title);
            }}
          />
          <FloatingCard image_url={image_url} alt={title.trim()} />
          <EditModal
            modalId='editNovelModal'
            title='Edit Novel'
            author={author}
            title={title}
            image_url={image_url}
            date={date}
            status={status}
            year={year}
            description={description}
            // onClick={}
            handleChange={e => {
              const { name, value } = e.target;

              this.setState({
                book: { ...this.state.book, [name]: value }
              });
            }}
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
            className={`btn-floating btn-large ${btnStatus}`}>
            <i className='large material-icons'>add</i>
          </a>
        </div>
      </div>
    );
  }
}
export default Details;
