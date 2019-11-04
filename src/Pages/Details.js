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
            <div class='nav-wrapper transparent z-depth-0'>
              <Link
                to='/'
                class='btn-floating btn-large transparent z-depth-0'
                style={{
                  margin: '10px 0 0 20px'
                }}>
                <i class='material-icons'>arrow_back</i>
              </Link>

              <ul id='nav-mobile' class='right hide-on-med-and-down'>
                <li>
                  <a href='#'>Edit</a>
                </li>
                <li>
                  <a href='#'>Delete</a>
                </li>
              </ul>
            </div>
          </nav>

          <div
            className='card right z-depth-4'
            style={{
              width: '180px',
              marginTop: '8%',
              marginRight: '5%',
              borderRadius: '12px'
            }}>
            <div className='card-image'>
              <img
                src='https://ssvr.bukukita.com/babacms/displaybuku/105385_f.jpg'
                height='290px'
                style={{ borderRadius: '12px' }}
              />
            </div>
          </div>
          <button
            className='btn-large z-depth-3 right'
            style={{
              transform: 'translate(150px, 600px)'
            }}>
            Borrow
          </button>
        </div>
        {/* asdads */}
        <div
          className='container left'
          style={{
            marginLeft: '200px',
            marginTop: '-60px',
            paddingRight: '200px',
            textAlign: 'justify'
          }}>
          <h5
            className='right light-green-text text-accent-4'
            style={{
              transform: 'translate(0, 50px)'
            }}>
            Available
          </h5>
          <a className='btn z-depth-0'>Comedy</a>
          <h4 style={{ width: '600px', textAlign: 'left' }}>
            Head Over Heels : Sebuah Romansa Bening
          </h4>
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
      </div>
    );
  }
}
export default Details;
