import React from 'react';
import SideNav from './SideNav';
import DropDownItems from './Dropdown';
import './Navbar.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NaviBar extends React.Component {
	render() {
		const mappingGenre = this.props.genres.genreData.map((cat, index) => {
			return (
				<li key={cat.id}>
					<Link onClick={this.props.onClickGenre} key={cat.id}>
						{cat.genre}
					</Link>
				</li>
			);
		});
		return (
			<nav>
				<SideNav />

				<DropDownItems id='all-categories'>{mappingGenre}</DropDownItems>
				<DropDownItems id='all-times'>
					<li>
						<Link onClick={this.props.searchOpt}>Title</Link>
					</li>
					<li>
						<Link onClick={this.props.searchOpt}>Author</Link>
					</li>
				</DropDownItems>
				{this.props.children}
			</nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		genres: state.genres,
	};
};

export default connect(mapStateToProps)(NaviBar);
