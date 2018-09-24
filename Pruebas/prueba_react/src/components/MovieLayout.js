import React from 'react';

function MovieLayout(props){
 
  return(
  	<div className='container-fluid'>
    	<div className='row'>
    		{props.children}
    	</div>
    </div>
  )
}


export default MovieLayout;

