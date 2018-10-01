import React from 'react';

function FooterLayout(props){
 
  return(
  	<div className='container-fluid footerLayout'>
    	<div className='row'>
    		{props.children}
    	</div>
    </div>
  )
}


export default FooterLayout;
