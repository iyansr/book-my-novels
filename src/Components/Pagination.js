import React from 'react';

const Pagination = props => {
	const { postPerpage, totalPost, paginate } = props;
	const PageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPost / postPerpage); i++) {
		PageNumbers.push(i);
	}

	return (
		<ul className='pagination center'>
			{PageNumbers.map(num => (
				<li key={num} style={{ marginLeft: '3px' }} className='active'>
					<a onClick={() => paginate(num)} href='#!'>
						{num}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Pagination;
