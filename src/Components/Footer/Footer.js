import React from 'react';

const Footer = () => {
  return (
    <footer className='page-footer purple darken-3'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>Novel Library</h5>
            <p className='grey-text text-lighten-4'>
              Novel Library frontend build with ReactJS
            </p>
          </div>
          <div className='col l4 offset-l2 s12'>
            <h5 className='white-text'>Social</h5>
            <ul>
              <li>
                <a className='grey-text text-lighten-3' href='#!'>
                  Instagram
                </a>
              </li>
              <li>
                <a className='grey-text text-lighten-3' href='#!'>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>© 2014 I Putu Saputrayana</div>
      </div>
    </footer>
  );
};

export default Footer;
