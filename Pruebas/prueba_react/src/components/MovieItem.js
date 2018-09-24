import React from 'react';

 const MovieItem = props => {
	
	return(
		<div className="movie col-md-3 col-4">
			<img src={props.data.medium_cover_image} alt={props.data.title} className="col-12" />
			<h3 className="col-12">{props.data.title}</h3>
			<p className="col-12">{props.data.summary}</p>
		</div>
	)
	
}

export default MovieItem;