import { Link } from 'react-router-dom';
import React from 'react';

const SideNav = () => {
	return (
		<ul id='slide-out' className='sidenav'>
			<li>
				<div className='center black-text' style={{ marginTop: '10px' }}>
					<img
						src='https://avatarfiles.alphacoders.com/149/149714.jpg'
						alt='tony'
						height='200'
						width='200'
						className='circle'
					/>
					<h5>Tony Stark</h5>
				</div>
			</li>
			<br />
			<li>
				<Link>
					<i className='material-icons'>explore</i>Explore
				</Link>
			</li>
			<li>
				<Link>
					<i className='material-icons'>history</i>History
				</Link>
			</li>
			<li>
				<Link
					data-target='addNovelModal'
					className='modal-trigger sidenav-close'>
					<i className='material-icons '>library_add</i>Add Novel
				</Link>
			</li>
		</ul>
	);
};

export default SideNav;
