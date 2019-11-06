import React, { Component } from 'react';
import '../Styles/Style.css';
// import M from 'materialize-css';
import { Link } from 'react-router-dom';
import DetailNav from '../Components/DetailNav/DetailNav';
import FloatingCard from '../Components/FloatingCard/FloatingCard';
import ContainerDetail from '../Components/ContainerDetail/ContainerDetail';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      desc: '',
      image_url: ''
    };
  }

  componentDidMount() {
    const { id_book } = this.props.match.params;
    const { title, desc, image_url } = this.props.location.state;

    this.setState({
      title,
      desc,
      image_url
    });
  }
  render() {
    return (
      <div>
        <div
          className='top-cover'
          style={{
            backgroundImage: `url('${this.state.image_url}')`
          }}>
          <DetailNav />
          <FloatingCard image_url={this.state.image_url} />
          <button className='btn-large z-depth-3 right btn-borrow'>
            Borrow
          </button>
        </div>
        {/* asdads */}
        <ContainerDetail desc={this.state.desc} title={this.state.title} />
        <div className='fixed-action-btn'>
          <a href='#' className='btn-floating btn-large'>
            <i className='large material-icons'>add</i>
          </a>
        </div>
      </div>
    );
  }
}
export default Details;
