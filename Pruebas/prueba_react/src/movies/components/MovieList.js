import React from 'react';
import MovieItem from './MovieItem';

const MovieList = props => {	

	if(props.listado){
		return(
			<div className="col-12">
			<h1>Destacados</h1>
				<div className='movieList row'>
				
				{
					props.listado.map((movie) => {
						return <MovieItem data={movie} key={movie.id} handleClickMovie={props.handleClickMovie} />
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