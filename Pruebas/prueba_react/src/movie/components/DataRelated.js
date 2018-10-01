import React from 'react';
import MovieItem from '../../movies/components/MovieItem';

 const DataRelated = props => {

	return(
		<div className="dataRelated">
			<div className="row">
			{
				props.similars.map((similar)=>{
					return <MovieItem key={similar.id} data={similar} handleClickMovie={props.handleClickMovie} />
				})
			
			}
			</div>
		</div>
	)

	
}

export default DataRelated;

