import React, { Component } from 'react';

export default class MovieLinks extends Component {

	loadDatosGenre = (ev) => {
		ev.preventDefault();
		this.props.loadDatos(ev.target.id);
	}
	render(){

		return(
			<div className="movieLinks col-md-2 col-12">
				<a onClick={this.loadDatosGenre} id="Comedy">Comedia</a>
				<a onClick={this.loadDatosGenre} id="Action">Acción</a>
				<a onClick={this.loadDatosGenre} id="Horror">Terror</a>
				<a onClick={this.loadDatosGenre} id="Sci-Fi">Ciencia Ficción</a>
			</div>
		)
	}
}