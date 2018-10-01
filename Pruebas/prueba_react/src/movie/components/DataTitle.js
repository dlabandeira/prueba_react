import React from 'react';

 const DataTitle = props => {
 	//console.log(props.data);
	return(
		<div className="col-12 dataTitle">
			<div className="row">
				<div className="col-4">
					<img id={props.data.id} src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/"+props.data.poster_path} alt={props.data.title} className="img-fluid" />
				</div>
				<div className="col-8">
					<h1>{props.data.title}</h1>
					<p>({props.data.release_date})</p>
					<h3 className="title">General</h3>
					<p>{props.data.overview}</p>
					<h3 className="title">Equipo Destacado</h3>
					<p>{props.data.vote_average}</p>
				</div>
			</div>
		</div>
	)
	
}

export default DataTitle;