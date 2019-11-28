import { Link } from 'react-router-dom';
import React from 'react';
const SideNav = props => {
	return (
		<>
			<ul id='slide-out' className='sidenav'>
				<li>
					<div className='user-view'>
						<div className='background'>
							<img
								src='https://images.wallpaperscraft.com/image/lines_smooth_minimalism_141682_1920x1080.jpg'
								style={{
									width: '100%',
								}}
							/>
						</div>
						<a href='#!'>
							<img
								className='circle'
								src={
									props.user.role === 1
										? props.user.avatar
										: 'https://res.cloudinary.com/iyansrcloud/image/upload/v1574684395/upload/user/profile-image-placeholder_q0nbtf.png'
								}
							/>
						</a>
						<Link
							to={`/profile/${props.user.user_id}`}
							className='sidenav-close'>
							<span className='white-text name'>
								{props.user.role === 1 ? props.user.name : 'Guest'}
							</span>
						</Link>
						<a href='#!'>
							<span className='white-text email'>
								{props.user.role === 1 ? props.user.email : 'Have a nice day'}
							</span>
						</a>
					</div>
				</li>
				{props.user.role !== 1 ? (
					<>
						<li className='sidenav-close'>
							<Link
								className='sidenav-close modal-trigger'
								data-target='userLoginModal'>
								Login
							</Link>
						</li>
						<li className='idenav-close'>
							<Link
								className='sidenav-close modal-trigger'
								data-target='userRegisterModal'>
								Register
							</Link>
						</li>
					</>
				) : null}

				{/* <br /> */}
				{!props.user ? null : (
					<li className='sidenav-close'>
						<Link to={window.location.pathname === '/' ? '#!' : '/'}>
							<i className='material-icons '>explore</i>Explore
						</Link>
					</li>
				)}

				{props.user.role === 1 ? (
					<li
						className='sidenav-close'
						style={{
							position: 'absolute',
							bottom: '60px',
							width: '100%',
						}}>
						<Link
							onClick={e => {
								e.preventDefault();
								try {
									localStorage.clear();
									window.location.href = '/';
								} catch (error) {
									console.log(error);
								}
							}}>
							<i className='material-icons sidenav-close'>exit_to_app</i>Log Out
						</Link>
					</li>
				) : null}
			</ul>
		</>
	);
};
// }

export default SideNav;
