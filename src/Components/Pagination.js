import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
		};
	}

	render() {
		const { postPerpage, totalPost, paginate } = this.props;
		const PageNumbers = [];

		for (let i = 1; i <= Math.ceil(totalPost / postPerpage); i++) {
			PageNumbers.push(i);
		}

		return (
			<ul className='pagination center'>
				{PageNumbers.map(num => (
					<li
						key={num}
						style={{ marginLeft: '3px' }}
						className={
							this.state.currentPage === num ? 'active purple darken-3' : ' '
						}>
						<Link
							onClick={() => {
								this.setState({ currentPage: num });
								paginate(num);
							}}>
							{num}
						</Link>
					</li>
				))}
			</ul>
		);
	}
}

export default Pagination;
