import React from 'react';
import SideNav from './SideNav';
import DropDownItems from './Dropdown';
import NavbarContent from './NavbarContent';
import './Navbar.css';
import categories from '../../Helpers/categories';
import allTimes from '../../Helpers/allTImes';

const NaviBar = () => {
  return (
    <nav>
      <SideNav />

      <DropDownItems id='all-categories'>
        {categories.map((cat, index) => {
          return (
            <li key={index}>
              <a href='#!'>{cat}</a>
            </li>
          );
        })}
      </DropDownItems>
      <DropDownItems id='all-times'>
        {allTimes.map((time, index) => {
          return (
            <li key={index}>
              <a href='#!'>{time}</a>
            </li>
          );
        })}
      </DropDownItems>
      <NavbarContent />
    </nav>
  );
};

export default NaviBar;
