import React from 'react';

const UserLayout = (props) => {
	return(
		<div className='col-md-6 userLayout'>
	    {props.children}
	    </div>
	)
}

export default UserLayout;
