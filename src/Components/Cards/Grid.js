import React from 'react';
import Cards from './Cards';

const Grid = props => {
	return (
		<div className='row'>
			{props.book.map(book => {
				return (
					<Cards
						genre={book.genre}
						alt={book.title.trim()}
						to={`details/${book.id}`}
						key={book.id}
						title={book.title}
						img={book.image_url}
						description={book.description}
						novelStatus={book.novel_status}
						badgeColor={
							book.novel_status === 'Available'
								? 'green accent-4'
								: 'pink lighten-3'
						}
					/>
				);
			})}
		</div>
	);
};
export default Grid;
