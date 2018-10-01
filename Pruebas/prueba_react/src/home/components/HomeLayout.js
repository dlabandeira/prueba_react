import React from 'react';

function HomeLayout(props){
 
  return(
  	<div className='container-fluid homeLayout'>
    	<div className='row'>
    		{props.children}
    	</div>
    </div>
  )
}


export default HomeLayout;