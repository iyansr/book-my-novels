import React from 'react';
import { Link } from 'react-router-dom';

const DetailNav = props => {
	const { onDelete, to, user } = props;
	return (
		<nav className='transparent z-depth-0'>
			<div className='nav-wrapper transparent z-depth-0'>
				<Link
					to={to}
					className='btn-floating btn-large transparent z-depth-0'
					style={{
						margin: '10px 0 0 20px',
					}}>
					<i className='material-icons'>arrow_back</i>
				</Link>

				{user.role === 2 ? (
					<ul className='right'>
						<li>
							<button
								className='modal-trigger transparent z-depth-0 btn'
								data-target='editNovelModal'
								style={{
									fontWeight: 'bolder',
									fontSize: '20px',
									textShadow: '2px 2px black',
								}}>
								Edit
							</button>
						</li>
						<li>
							<button
								className='modal-trigger transparent z-depth-0 btn'
								data-target='editImageModal'
								style={{
									fontWeight: 'bolder',
									fontSize: '20px',
									textShadow: '2px 2px black',
								}}>
								Edit Image
							</button>
						</li>
						<li>
							<button
								onClick={onDelete}
								className='transparent z-depth-0 btn'
								data-target='modalAlert'
								style={{
									fontWeight: 'bolder',
									fontSize: '20px',
									textShadow: '2px 2px black',
								}}>
								Delete
							</button>
						</li>
					</ul>
				) : null}
			</div>
		</nav>
	);
};

export default DetailNav;
