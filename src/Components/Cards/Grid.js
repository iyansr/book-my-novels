import React from 'react';
import Cards from './Cards';
import LoadingCard from './LoadingCard';

const Grid = props => {
	if (props.isLoading) {
		return (
			<div className='row'>
				<LoadingCard />
				<LoadingCard />
				<LoadingCard />
				<LoadingCard />
				<LoadingCard />
				<LoadingCard />
			</div>
		);
	}

	return (
		<div className='row'>
			{props.book.map(book => {
				return (
					<Cards
						user={props.user}
						genre={book.Genre}
						alt={book.title.trim()}
						to={`details/${book.novel_id}`}
						key={book.novel_id}
						title={book.title}
						img={book.image}
						description={book.description}
						novelStatus={book.Status}
						badgeColor={
							book.Status === 'Available' ? 'green accent-4' : 'pink lighten-3'
						}
					/>
				);
			})}
		</div>
	);
};
export default Grid;
