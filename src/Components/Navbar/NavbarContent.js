import React from 'react';
// import logo from '../../Assets/books.png';
import logo from '../../Assets/icon.png';
import { Link } from 'react-router-dom';

const NavbarContent = () => {
  return (
    <div className="nav-wrapper z-depth-2 purple darken-3">
      <a href="/#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons white-text ">menu</i>
      </a>

      <Link to="/" className="brand-logo right white-text">
        <img
          src={logo}
          alt="books"
          height="50px"
          style={{
            marginRight: '10px',
            marginTop: '6px',
          }}
        />
      </Link>

      <ul className="left hide-on-med-and-down">
        <li>
          <a href="/#">
            <i
              data-target="slide-out"
              className="material-icons white-text sidenav-trigger left"
            >
              menu
            </i>
          </a>
        </li>
        <li>
          <a
            className="dropdown-trigger white-text"
            href="/#"
            data-target="all-categories"
          >
            All Categories
            <i className="material-icons right white-text">arrow_drop_down</i>
          </a>
        </li>

        <li>
          <a
            className="dropdown-trigger white-text"
            href="/#"
            data-target="all-times"
          >
            All Times
            <i className="material-icons right white-text">arrow_drop_down</i>
          </a>
        </li>
        <li>
          <div className="input-field brand-logo center">
            <input
              id="search"
              type="search"
              required
              placeholder=" Search..."
              className=" white-text purple purple darken-2"
              style={{
                borderRadius: '50px',
                height: '40px',
                marginTop: '12px',
              }}
            />
            <label className="label-icon" htmlFor="search">
              <i
                className="material-icons white-text"
                style={{
                  marginTop: '3px',
                }}
              >
                search
              </i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavbarContent;
