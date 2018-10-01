import React from 'react';
import DataTitle from '../DataTitle';
import DataTags from '../DataTags';
import DataCasting from '../DataCasting';


 const Movie = props => {
	console.log(props);
	return(
		<DataTitle />
		<DataTags />
		<DataCasting />
	)
	
}

export default Movie;
