import React from 'react';

 const MovieItem = props => {
//console.log(props);
	return(
		<div className="movie col-md-3 col-4"  >
			<a href="" onClick={props.handleClickMovie}>
				<img id={props.data.id} src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+props.data.poster_path} alt={props.data.title} className="col-12" />
				<h3 id={props.data.id} className="col-12">{props.data.title}</h3>
				<p id={props.data.id} className="col-12">{props.data.summary}</p>
			</a>
		</div>
	)
	
}

export default MovieItem;

