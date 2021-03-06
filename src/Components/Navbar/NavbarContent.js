import React from 'react';
// import logo from '../../Assets/books.png';
import logo from '../../Assets/icon.png';
import { Link } from 'react-router-dom';

const NavbarContent = props => {
	return (
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
				<li>
					<Link
						className='dropdown-trigger white-text'
						data-target='all-categories'>
						All Categories
						<i className='material-icons right white-text'>arrow_drop_down</i>
					</Link>
				</li>

				<li>
					<Link className='dropdown-trigger white-text' data-target='all-times'>
						{props.searchBy}
						<i className='material-icons right white-text'>arrow_drop_down</i>
					</Link>
				</li>

				<li>
					<div className='input-field brand-logo center'>
						<form onSubmit={props.onSearch}>
							<input
								name='search'
								id='search'
								type='search'
								value={props.searchVal}
								onChange={props.searchChange}
								required
								placeholder=' Search...'
								className=' white-text purple purple darken-2'
								style={{
									borderRadius: '50px',
									height: '40px',
									marginTop: '12px',
									width: '300px',
								}}
							/>
						</form>
						<label className='label-icon' htmlFor='search'>
							<i
								className='material-icons white-text'
								style={{
									marginTop: '-10px',
									marginLeft: '20px',
								}}>
								search
							</i>
						</label>
						<i className='material-icons'>close</i>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default NavbarContent;
