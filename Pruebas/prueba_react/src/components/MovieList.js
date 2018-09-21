import React, { Component } from 'react';
import MovieItem from './MovieItem';


export default class MovieList extends Component {
	
	/*constructor(props){
		super(props);
	}*/

	render(){

		return(

			<div className='movieList row'>
			{
				this.props.listado.map((movie) => {
					return <MovieItem data={movie} key={movie.id}/>
				})
			}
			</div>
		)
	}
}