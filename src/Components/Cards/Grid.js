import React from 'react';
import Cards from './Cards';

const Grid = props => {
	return (
		<div className='row'>
			{props.book.map(book => {
				return (
					<Cards
						alt={book.title.trim()}
						to={`details/${book.id}`}
						key={book.id}
						title={book.title}
						img={book.image_url}
						description={book.description}
					/>
				);
			})}
		</div>
	);
};
export default Grid;
