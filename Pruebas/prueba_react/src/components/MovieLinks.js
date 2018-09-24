import React from 'react';

const MovieLinks = props => {

	return(
		<div className="movieLinks col-md-2 col-12">
			<a onClick={props.loadDatosGenre} id="Comedy">Comedia</a>
			<a onClick={props.loadDatosGenre} id="Action">Acción</a>
			<a onClick={props.loadDatosGenre} id="Horror">Terror</a>
			<a onClick={props.loadDatosGenre} id="Sci-Fi">Ciencia Ficción</a>
		</div>
	)
}

export default MovieLinks;