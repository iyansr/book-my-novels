import React from 'react';
import CarouselCard from './Card';
import CarouselLoading from './CarouselLoading';

const CarouselGrid = props => {
	if (props.loading) {
		return (
			<div className='carousel'>
				<CarouselLoading />
				<CarouselLoading />
				<CarouselLoading />
				<CarouselLoading />
				<CarouselLoading />
			</div>
		);
	}

	return (
		<div className='carousel'>
			{props.data.map((book, id) => {
				if (id <= 4) {
					return (
						<CarouselCard
							alt={book.title.trim()}
							key={book.novel_id}
							author={book.author}
							title={book.title}
							img={book.image}
						/>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
};

export default CarouselGrid;
