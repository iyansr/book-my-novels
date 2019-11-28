import React, { Component } from 'react';
// import { connect } from 'react-redux';
import classNames from 'classnames';

import M from 'materialize-css';

class EditModal extends Component {
	componentDidMount() {
		const elems = document.querySelectorAll('select');
		M.FormSelect.init(elems);
	}

	render() {
		const {
			title,
			author,
			description,
			status_id,
			genre_id,
			onChange,
			onSubmit,
			modalId,
			modalTitle,
			gDropDown,
			sDropDown,
			isLoading,
			pages,
			isbn,
			vendor,
			weight,
			height,
			length,
			isActive,
		} = this.props;

		return (
			<div id={modalId} className='modal'>
				<button className='btn modal-close right btn-floating transparent z-depth-0'>
					<i className='material-icons black-text'>close</i>
				</button>

				<div className='modal-content'>
					<h4>{modalTitle}</h4>
					<div className='row'>
						<form onSubmit={onSubmit}>
							<div className='input-field col m12'>
								<i className='material-icons prefix'>person</i>
								<input
									name='title'
									id='title'
									type='text'
									className={classNames('validate', {
										active: isActive,
									})}
									// placeholder='Title'
									value={title}
									onChange={onChange}
									required
									data-error='Field Cannot be Empry'
								/>
								<label htmlFor='title'>Title</label>
							</div>
							<div className='input-field col m12'>
								<i className='material-icons prefix'>person</i>
								<input
									name='author'
									id='author'
									type='text'
									className={classNames('validate ', {
										active: isActive,
									})}
									// placeholder='Author'
									value={author}
									onChange={onChange}
									required
									data-error='Field Cannot be Empry'
								/>
								<label htmlFor='author'>Author</label>
							</div>

							{/* <div className='file-field input-field col m12'>
								<div className='btn'>
									<span>File</span>
									<input
										type='file'
										name='image'
										type='file'
										value={image_url}
										onChange={onChangeImg}
									/>
								</div>
								<div className='file-path-wrapper'>
									<input class='file-path validate' type='text' />
								</div>
							</div> */}

							<div className='input-field col m12'>
								<i className='material-icons prefix'>account_circle</i>
								<select
									name='status'
									id='novel_status'
									type='text'
									className={classNames('validate ', {
										active: isActive,
									})}
									value={status_id}
									onChange={onChange}>
									<option value={status_id} selected disabled>
										Select Status
									</option>
									{sDropDown.map(status => {
										return (
											<option key={status.status_id} value={status.status_id}>
												{status.status}
											</option>
										);
									})}
								</select>
								<label htmlFor='novel_status'>Select Status</label>
							</div>
							<div className='input-field col m12'>
								<i className='material-icons prefix'>account_circle</i>
								<select
									name='genre'
									id='genre'
									value={genre_id}
									onChange={onChange}>
									<option value={genre_id} selected disabled>
										Select Genre
									</option>
									{gDropDown.map(genre => {
										return (
											<option key={genre.genre_id} value={genre.genre_id}>
												{genre.genre}
											</option>
										);
									})}
								</select>
								{/* <label>Select Genre</label> */}
							</div>
							<div className='input-field col m12'>
								<i className='material-icons prefix'>account_circle</i>
								<textarea
									name='description'
									id='description'
									type='text'
									className={classNames('validate materialize-textarea ', {
										active: isActive,
									})}
									// placeholder='Description'
									value={description}
									onChange={onChange}
									required
									data-error='Field Cannot be Empry'
								/>
								<label htmlFor='description'>Description</label>
							</div>
							{/* // */}

							<div className='row'>
								<div className='input-field col m6'>
									<i className='material-icons prefix'>account_circle</i>
									<input
										min='0'
										step='0.01'
										name='pages'
										id='pages'
										type='number'
										className={classNames('validate', {
											active: isActive,
										})}
										value={pages}
										onChange={onChange}
										required
										data-error='Field Cannot be Empry'
										style={{ height: '45px' }}
									/>
									<label htmlFor='pages'>Pages</label>
								</div>
								{/* // */}
								<div className='input-field col m6'>
									<i className='material-icons prefix'>account_circle</i>
									<input
										name='isbn'
										id='isbn'
										type='text'
										className={classNames('validate', {
											active: isActive,
										})}
										value={isbn}
										onChange={onChange}
										required
										data-error='Field Cannot be Empry'
									/>
									<label htmlFor='isbn'>ISBN</label>
								</div>
								{/* // */}
								<div className='input-field col m6'>
									<i className='material-icons prefix'>account_circle</i>
									<input
										name='vendor'
										id='vendor'
										type='text'
										className={classNames('validate', {
											active: isActive,
										})}
										value={vendor}
										onChange={onChange}
										required
										data-error='Field Cannot be Empry'
									/>
									<label htmlFor='vendor'>Publisher</label>
								</div>
								{/* // */}

								<div className='input-field col m6'>
									<i className='material-icons prefix'>account_circle</i>
									<input
										min='0'
										step='0.01'
										name='weight'
										id='weight'
										type='number'
										className={classNames('validate', {
											active: isActive,
										})}
										value={weight}
										onChange={onChange}
										required
										data-error='Field Cannot be Empry'
									/>
									<label htmlFor='weight'>Weight</label>
								</div>
								{/* // */}
								<div className='input-field col m6'>
									<i className='material-icons prefix'>account_circle</i>
									<input
										min='0'
										step='0.01'
										name='height'
										id='height'
										type='number'
										className={classNames('validate', {
											active: isActive,
										})}
										value={height}
										onChange={onChange}
										required
										data-error='Field Cannot be Empry'
									/>
									<label htmlFor='height'>Height</label>
								</div>
								{/* // */}
								<div className='input-field col m6'>
									<i className='material-icons prefix'>account_circle</i>
									<input
										min='0'
										step='0.01'
										name='length'
										id='length'
										type='number'
										className={classNames('validate', {
											active: isActive,
										})}
										value={length}
										onChange={onChange}
										required
										data-error='Field Cannot be Empry'
									/>
									<label htmlFor='length'>Length</label>
								</div>
							</div>

							{/* // */}
							<div className='modal-footer'>
								{isLoading ? (
									<div class='preloader-wrapper small active'>
										<div class='spinner-layer spinner-green-only'>
											<div class='circle-clipper left'>
												<div class='circle'></div>
											</div>
											<div class='gap-patch'>
												<div class='circle'></div>
											</div>
											<div class='circle-clipper right'>
												<div class='circle'></div>
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

export default EditModal;
