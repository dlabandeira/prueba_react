import React, { Component } from 'react';
import DataItem from '../components/DataItem';
import DataTitle from '../components/DataTitle';
import DataTags from '../components/DataTags';
import DataCasting from '../components/DataCasting';
import DataRelated from '../components/DataRelated';


export default class Movie extends Component {

	constructor(props){
		super(props);
		this.state = {
			team: [],
			similars: [],
		};
	}

	componentDidMount(){
		this.loadTeam();
		this.loadSimilars();
	}

	async loadTeam(){
		//console.log("ID",this.props.data.id);
		let url = 'https://api.themoviedb.org/3/movie/'+this.props.data.id+'/credits?api_key=9be398413515840dbd1c4a76ed9b55f3&lang=es-ES"';
		const response = await fetch(url);
		const api = await response.json();
		//console.log(api);
		this.setState({
			team: api,
		})
	}

	async loadSimilars(){
    
	    let url='https://api.themoviedb.org/3/movie/'+this.props.data.id+'/similar?&api_key=9be398413515840dbd1c4a76ed9b55f3&language=es-ES&page=1&results=4';

	    const response = await fetch(url);
	    const api = await response.json();

	    this.setState({
	      similars: api.results,
	    });
	  }


	render(){
		
		return(
			<DataItem>
				<DataTitle {...this.props} />
				<DataTags {...this.props} />
				<DataCasting {...this.props} dataTeam={this.state.team}/>
				<DataRelated similars={this.state.similars} handleClickMovie={this.props.handleClickMovie} />
			</DataItem>
		)
	}
	
}
