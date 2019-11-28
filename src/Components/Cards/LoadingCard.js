import React from 'react';
import './Card.css';
import ContentLoader, { List } from 'react-content-loader';

const LoadngCard = () => {
	return (
		<div className='col s12 m4'>
			<div
				className='card z-depth-3'
				style={{
					borderRadius: '12px',
				}}>
				<div className='card-image'>
					<ContentLoader
						style={{
							width: '100%',
							height: '15rem',
							objectFit: 'cover',
							borderRadius: '12px 12px 0 0',
						}}
						speed={2}
						primaryColor='#f3f3f3'
						secondaryColor='#ecebeb'>
						<rect x='0' y='0' rx='5' ry='5' width='400' height='400' />
					</ContentLoader>
				</div>
				<div
					className='card-content'
					style={{
						height: '180px',
					}}>
					<List
						style={{
							height: '150px',
						}}
					/>
				</div>
			</div>
		</div>
	);
};
// }

export default LoadngCard;
