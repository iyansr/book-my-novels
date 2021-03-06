import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Cards = props => {
	const {
		img,
		to,
		title,
		description,
		alt,
		novelStatus,
		badgeColor,
		genre,
	} = props;

	return (
		<div className='col s12 m4'>
			<div
				className='card hoverable'
				style={{
					borderRadius: '12px',
				}}>
				<div className='card-image'>
					<img
						alt={alt}
						src={img}
						style={{
							width: '100%',
							height: '15rem',
							objectFit: 'cover',
							borderRadius: '12px 12px 0 0',
						}}
					/>
				</div>
				<div
					className='card-content'
					style={{
						height: '180px',
					}}>
					<p style={{ marginTop: '-5px' }}>
						<span
							className={`new badge left ${badgeColor} `}
							data-badge-caption=' '
							style={{ marginLeft: '0', borderRadius: '10px' }}>
							{novelStatus}
						</span>
						<span
							className={`new badge left purple darken-3`}
							data-badge-caption=' '
							style={{ marginLeft: '10px', borderRadius: '10px' }}>
							{genre}
						</span>
					</p>
					<br />
					<Link
						className={classNames('black-text __card-title ', {
							__card_title_disabled:
								props.user.role !== 1 && props.user.role !== 2,
						})}
						to={to}
						style={{
							fontWeight: 'bold',
							fontSize: '1.3em',
						}}>
						{title}
					</Link>
					<p
						className='block-with-text '
						dangerouslySetInnerHTML={{ __html: description }}></p>
				</div>
			</div>
		</div>
	);
};

export default Cards;
