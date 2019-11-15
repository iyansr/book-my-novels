import React from 'react';

const ContainerDetail = props => {
	const { desc, title, author, status, genre } = props;

	const color =
		status === 'Available' ? ' light-green-text text-accent-4' : 'red-text';

	return (
		<div className='left detail-container'>
			<h5 className={`right ${color} text-status`}>{status}</h5>
			<button
				className='btn z-depth-0 purple darken-3'
				style={{ borderRadius: '10px' }}>
				{genre}
			</button>
			<h4>{title}</h4>
			<span style={{ fontWeight: 'bold' }}>{author}</span>
			<p
				style={{
					marginTop: '20px',
				}}
				dangerouslySetInnerHTML={{ __html: desc }}>
				{/* {desc} */}
			</p>
		</div>
	);
};

export default ContainerDetail;
