import React from 'react';

const UserData = (props) =>{

	if(props.userName){

		return(
			<div className="row">
				<img className="img-fluid col-2" src={props.userImage.thumbnail} alt={props.userName.first}/>
				<p className="col-9">{props.userName.first} {props.userName.last}</p>
			</div>
		)
	}
	return null;

}

export default UserData;