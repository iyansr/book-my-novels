import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/icon.png';

const PorfileNav = props => {
	return (
		<>
			<nav className='purple darken-3'>
				<div className='nav-wrapper z-depth-2 purple darken-3'>
					<Link data-target='slide-out' className='sidenav-trigger'>
						<i className='material-icons white-text '>menu</i>
					</Link>

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

					<ul className='left hide-on-med-and-down'>
						<li>
							<Link>
								<i
									data-target='slide-out'
									className='material-icons white-text sidenav-trigger left'>
									menu
								</i>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default PorfileNav;
