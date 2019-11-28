import React, { Component } from 'react';

import M from 'materialize-css';

class EditModalImage extends Component {
	componentDidMount() {
		const elems = document.querySelectorAll('select');
		M.FormSelect.init(elems);
	}

	render() {
		const {
			image_url,
			onSubmitImg,
			modalId,
			modalTitle,
			isLoading,
			onChangeImg,
		} = this.props;
		return (
			<div id={modalId} className='modal'>
				<button className='btn modal-close right btn-floating transparent z-depth-0'>
					<i className='material-icons black-text'>close</i>
				</button>
				<div className='modal-content'>
					<h4>{modalTitle}</h4>
					<div className='row'>
						<form onSubmit={onSubmitImg}>
							<div className='file-field input-field col m12'>
								<div className='btn'>
									<span>File</span>
									<input
										type='file'
										name='image'
										value={image_url}
										onChange={onChangeImg}
									/>
								</div>
								<div className='file-path-wrapper'>
									<input className='file-path validate' type='text' />
								</div>
							</div>
							<div className='modal-footer'>
								{isLoading ? (
									<div className='preloader-wrapper small active'>
										<div className='spinner-layer spinner-green-only'>
											<div className='circle-clipper left'>
												<div className='circle'></div>
											</div>
											<div className='gap-patch'>
												<div className='circle'></div>
											</div>
											<div className='circle-clipper right'>
												<div className='circle'></div>
											</div>
										</div>
									</div>
								) : (
									<button
										type='submit'
										className={`btn purple darken-4`}
										style={{ marginBottom: '20px' }}>
										Save
									</button>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default EditModalImage;
