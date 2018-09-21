import React, { Component } from 'react';

export default class MovieItem extends Component {
	
	/*constructor(props){
		super(props);
	}*/

	render(){
		//console.log(this.props.data);
		return(
			<div className="movie col-md-3 col-4">
				<img src={this.props.data.medium_cover_image} alt={this.props.data.title} className="col-12" />
				<h3 className="col-12">{this.props.data.title}</h3>
				<p className="col-12">{this.props.data.summary}</p>
			</div>
		)
	}
}
