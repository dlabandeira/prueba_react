import React from 'react';

function MovieLayout(props){
 
  return(
  	<div className='movieLayout col-12'>
	  	<div className='row'>
	    	{props.children}
	    </div>
    </div>
  )
}


export default MovieLayout;

