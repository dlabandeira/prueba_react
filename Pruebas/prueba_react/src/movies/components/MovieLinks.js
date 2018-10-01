import React from 'react';

const MovieLinks = props => {

	if(props){
		return(
			<nav className="movieLinks col-12">
			{
				props.genres.map((category) => {
					return <a onClick={props.loadDatosGenre} key={category.id} id={category.id}>{category.name}</a>
				})
			}
			</nav>

		)
	}
}

export default MovieLinks;
