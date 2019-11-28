import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/icon.png';

const PorfileNav = props => {
	return (
		<>
			<nav className='purple darken-3'>
				<div className='nav-wrapper z-depth-2 purple darken-3'>
					<Link to='/' className='brand-logo right white-text'>
						<img
							src={logo}
							alt='books'
							height='50px'
							style={{
								marginRight: '10px',
								marginTop: '6px',
							}}
						/>
					</Link>
				</div>
			</nav>
		</>
	);
};

export default PorfileNav;
