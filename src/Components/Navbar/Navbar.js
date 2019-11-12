import React from "react";
import SideNav from "./SideNav";
import DropDownItems from "./Dropdown";
import NavbarContent from "./NavbarContent";
import "./Navbar.css";
import allTimes from "../../Helpers/allTImes";
import { connect } from "react-redux";

const NaviBar = props => {
  return (
    <nav>
      <SideNav />

      <DropDownItems id="all-categories">
        {props.genres.genreData.map((cat, index) => {
          return (
            <li key={cat.id}>
              <a href="#!">{cat.genre}</a>
            </li>
          );
        })}
      </DropDownItems>
      <DropDownItems id="all-times">
        {allTimes.map((time, index) => {
          return (
            <li key={index}>
              <a href="#!">{time}</a>
            </li>
          );
        })}
      </DropDownItems>
      <NavbarContent />
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    genres: state.genres
  };
};

export default connect(mapStateToProps)(NaviBar);
