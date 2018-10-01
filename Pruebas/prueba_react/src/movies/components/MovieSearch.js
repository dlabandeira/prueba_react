import React from 'react';

const MovieSearch = props => {
	return(
		<div className='col-md-6'>
			<form onSubmit={props.handleSearchSubmit}>
				<input
					ref={props.setRef}
					type="text"
					placeholder="Qué película buscas?"
				/>
			</form>
		</div>
	)
}

export default MovieSearch;