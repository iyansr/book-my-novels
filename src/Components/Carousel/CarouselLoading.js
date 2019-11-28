import React from 'react';
import './Carousel.css';
import ContentLoader from 'react-content-loader';

const CarouselLoading = () => {
	return (
		<div
			className='card  carousel-card carousel-item z-depth-5'
			style={{ borderRadius: '12px' }}>
			<div className='card-image '>
				<ContentLoader
					className='custom-card-img'
					style={{
						height: '14rem',
					}}
					speed={2}
					primaryColor='#f3f3f3'
					secondaryColor='#ecebeb'>
					<rect x='0' y='0' rx='5' ry='5' width='400' height='400' />
				</ContentLoader>
				<div className='card-title custom-title'></div>
			</div>
		</div>
	);
};

export default CarouselLoading;
