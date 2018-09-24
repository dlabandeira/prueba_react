
import React, { Component } from 'react';
import MovieList from './components/MovieList';
import MovieLinks from './components/MovieLinks';
import MovieLayout from './components/MovieLayout';
import MovieSearch from './containers/MovieSearch';
import MoviePaginator from './components/MoviePaginator';

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
 /* componentWillReceiveProps(){
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  }
  componentDidUpdate(){
    console.log("BBBBBBBBBBBBBBBBBBBBBBBB");
  }*/
  async loadDatos(genre,name,page){
    
    let url; let currentPage = 1;
    if(page) currentPage = page;

    if(name){
      url = "https://yts.am/api/v2/list_movies.json?limit=12&query_term="+name;
    }else if(genre){
      url = "https://yts.am/api/v2/list_movies.json?limit=12&genre="+genre;
    }else{
      url = "https://yts.am/api/v2/list_movies.json?limit=12";
    }
    url +="&sort_by=title&order_by=asc&page="+currentPage;

    const response = await fetch(url);
    const api = await response.json();

    this.setState({
      datos: api.data,
    });
  }

  loadDatosGenre = (ev) => {
    ev.preventDefault();
    this.loadDatos(ev.target.id);
  }

  setRef = (element) => {
    this.buscador = element;
  }
  searchSubmit = (ev) => {
    ev.preventDefault();
    this.loadDatos("",this.buscador.value);
  }
  
  handlePaginator = (ev) => {
    ev.preventDefault();
    this.loadDatos("","",ev.target.id);
  }
  

  render() {

    return(
      <MovieLayout>
        
        <MovieSearch handleSearchSubmit={this.searchSubmit} setRef={this.setRef}/>
        <MovieLinks loadDatosGenre={this.loadDatosGenre} />
        <MovieList listado={this.state.datos.movies} loadDatos={this.loadDatos}/>
        <MoviePaginator data={this.state.datos} handlePaginator={this.handlePaginator} setPage={this.setPage}/>

      </MovieLayout> 
    )
      

  }
}

