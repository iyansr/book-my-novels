import React from 'react';
import SideNav from './SideNav';
import DropDownItems from './Dropdown';
import NavbarContent from './NavbarContent';
import './Navbar.css';
import allTimes from '../../Helpers/allTImes';
import { connect } from 'react-redux';

class NaviBar extends React.Component {
	render() {
		const mappingGenre = this.props.genres.genreData.map((cat, index) => {
			return (
				<li key={cat.id}>
					<a href='#!' onClick={this.props.onClickGenre} key={cat.id}>
						{cat.genre}
					</a>
				</li>
			);
		});
		return (
			<nav>
				<SideNav />

				<DropDownItems id='all-categories'>{mappingGenre}</DropDownItems>
				<DropDownItems id='all-times'>
					<li>
						<a href='#!' onClick={this.props.searchOpt}>
							Title
						</a>
					</li>
					<li>
						<a href='#!' onClick={this.props.searchOpt}>
							Author
						</a>
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
