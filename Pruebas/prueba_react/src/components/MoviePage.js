import React from 'react';

const MoviePage = props => {

	if(props.id === props.currentPage){
		return(<h1>{props.id}&nbsp;</h1>)
	}else{
		return(<a onClick={props.handlePaginator} id={props.id}>{props.id}&nbsp;</a>)
	}

}

export default MoviePage;