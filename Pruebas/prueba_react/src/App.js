
import React, { Component } from 'react';
import MovieList from './components/MovieList';
import MovieLinks from './components/MovieLinks';

import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      datos: []
    }; 
    this.loadDatos = this.loadDatos.bind(this);
  }
  componentDidMount(){
    this.loadDatos();
  }
  componentWillReceiveProps(){
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  }
  componentDidUpdate(){
    console.log("BBBBBBBBBBBBBBBBBBBBBBBB");
  }
  async loadDatos(genre){
    
    let url;

    if(genre){
      url = "https://yts.am/api/v2/list_movies.json?limit=12&genre="+genre;
    }else{
      url = "https://yts.am/api/v2/list_movies.json?limit=12";
    }
    const response = await fetch(url);
    const api = await response.json();
    this.setState({
      datos: api.data,
    });
  }
  render() {

    if (this.state.datos.movie_count > 0) {
      return (
        <div className='container-fluid'>
          <div className='row'>
      
            <MovieLinks loadDatos={this.loadDatos} />

            <div className="col-md-10 col-12">
              <MovieList listado={this.state.datos.movies} loadDatos={this.loadDatos}/>
            </div>

          </div>
        </div>
      )
    } else {
      return (
        <div className='container-fluid'>
          <div className='row'>
            
            <MovieLinks loadDatos={this.loadDatos} />
          
            <div className="col-md-10 col-12">
              <p>Cargando peliculas...</p>
            </div>

          </div>
        </div>
      )
    }

  }
}

