import React, { Component } from 'react';
import '../Styles/Style.css';
// import M from 'materialize-css';
import { Link } from 'react-router-dom';

class Details extends Component {
  // componentDidMount() {}
  render() {
    return (
      <div>
        <div
          className='top-cover'
          style={{
            backgroundImage: `url('https://ssvr.bukukita.com/babacms/displaybuku/105385_f.jpg')`
          }}>
          <nav className='transparent z-depth-0'>
            <div className='nav-wrapper transparent z-depth-0'>
              <Link
                to='/'
                className='btn-floating btn-large transparent z-depth-0'
                style={{
                  margin: '10px 0 0 20px'
                }}>
                <i className='material-icons'>arrow_back</i>
              </Link>

              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li>
                  <a href='#'>Edit</a>
                </li>
                <li>
                  <a href='#'>Delete</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className='card right z-depth-4 detail-card-right'>
            <div className='card-image'>
              <img
                src='https://ssvr.bukukita.com/babacms/displaybuku/105385_f.jpg'
                style={{ borderRadius: '12px' }}
              />
            </div>
          </div>
          <button className='btn-large z-depth-3 right btn-borrow' style={{}}>
            Borrow
          </button>
        </div>
        {/* asdads */}
        <div className='left detail-container'>
          <h5 className='right light-green-text text-accent-4 text-status'>
            Available
          </h5>
          <a className='btn z-depth-0'>Comedy</a>
          <h4>Head Over Heels : Sebuah Romansa Bening</h4>
          <span style={{ fontWeight: 'bold' }}>Agustus 2017</span>
          <p
            style={{
              marginTop: '20px'
            }}>
            Mereka punya cerita patah hati sendiri yang tidak tersembuhkan oleh
            waktu. Hingga mereka bertemu di Pulai Nias, di suatu dini hari. Pagi
            yang belum merekah sempurna itu menjadi awal kisah serupa benang
            kusut yang menautkan Milo dan Btari. Keduanya bertengkar dan saling
            bantah tak kenal musim. Sampai di suatu titik jenuh yang
            menjungkirbalikkan semua, Btari dan Milo tak pernah menduga, cinta
            bisa menaklukan keduanya.
          </p>
        </div>
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
