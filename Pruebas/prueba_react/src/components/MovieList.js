import React from 'react';
import MovieItem from './MovieItem';

const MovieList = props => {	
	if(props.listado){
		return(
			<div className="col-md-10 col-12">
				<div className='movieList row'>
				{
					props.listado.map((movie) => {
						return <MovieItem data={movie} key={movie.id} />
					})
				}
				</div>
			</div>
		)
	}else {
		return(
			<div className="col-md-10 col-12">
	          <p>Cargando peliculas...</p>
	        </div>
		)
	}
}

export default MovieList;