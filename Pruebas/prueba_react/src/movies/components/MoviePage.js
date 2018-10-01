import React from 'react';

const MoviePage = props => {

	if(props.id === props.currentPage){
		return(<strong>{props.id}</strong>)
	}else{
		return(<a onClick={props.handlePaginator} id={props.id}>{props.id}</a>)
	}

}

export default MoviePage;