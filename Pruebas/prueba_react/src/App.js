
import React, { Component } from 'react';

import HomeLayout from './home/components/HomeLayout';
import UtilsLayout from './home/components/UtilsLayout';
import FooterLayout from './home/components/FooterLayout';

import MovieList from './movies/components/MovieList';
import MovieLinks from './movies/components/MovieLinks';
import MovieLayout from './movies/components/MovieLayout';
import MovieSearch from './movies/components/MovieSearch';
import MoviePaginator from './movies/components/MoviePaginator';
import Movie from './movie/containers/Movie';

import UserLayout from './users/components/UserLayout';
import UserData from './users/components/UserData';

import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: "https://api.themoviedb.org/3",
      api_key: "9be398413515840dbd1c4a76ed9b55f3",
      datos: [],
      genres: [],
      currentGenre:"",
      userName: "",
      userImage: "",
    }; 
    this.loadDatos = this.loadDatos.bind(this);
  }
  componentDidMount(){
    this.loadDatos();
    this.loadUserData();
    this.loadGenres();
  }

  async loadGenres(){
    
    let url=this.state.url+'/genre/movie/list?&api_key='+this.state.api_key+'&language=es-ES';

    const response = await fetch(url);
    const api = await response.json();

    this.setState({
      genres: api.genres,
    });
  }

  async loadUserData(){

    let url='https://randomuser.me/api/?results=1';
    
    const response = await fetch(url);
    const api = await response.json();

    this.setState({
      userName: api.results[0].name,
      userImage: api.results[0].picture,
    });


  }
  async loadDatos(genre,name,page,movie){
    
    let currentPage = 1; let url; let activeGenre;
    if(page) currentPage = page;

    if(genre){
      activeGenre=genre;
    }else if(this.state.currentGenre){
      activeGenre=this.state.currentGenre;
    }
    movie = 348350;
    if(movie){
      url=this.state.url+'/movie/'+movie+'?api_key='+this.state.api_key+'&language=es-ES';
    }else if(name){
      url=this.state.url+'/search/movie?query='+name+'&api_key='+this.state.api_key+'&language=es-ES';
    }else if(activeGenre){
      url=this.state.url+'/discover/movie?with_genres='+activeGenre+'&api_key='+this.state.api_key+'&language=es-ES';
    }else{
      url=this.state.url+'/trending/movie/day?&api_key='+this.state.api_key+'&language=es-ES';
    }  
    url +="&page="+currentPage;

    const response = await fetch(url);
    const api = await response.json();

    this.setState({
      datos: api,
      currentGenre: activeGenre,
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

  handleClickMovie = (ev) => {
    ev.preventDefault();
    this.loadDatos("","","",ev.target.id);
  }
  

  render() {

    return(

      <HomeLayout>

        <UtilsLayout>
          <MovieLinks 
              genres={this.state.genres}
              loadDatosGenre={this.loadDatosGenre}
          />
        </UtilsLayout>

        <MovieLayout>   
          
          <UserLayout>
            <UserData 
              userName={this.state.userName}
              userImage={this.state.userImage}
            />
          </UserLayout>

          <MovieSearch
            handleSearchSubmit={this.searchSubmit}
            setRef={this.setRef}
          />

          {  this.state.datos.id ?
              <Movie 
                data={this.state.datos}
                loadDatosGenre={this.loadDatosGenre}
                handleClickMovie={this.handleClickMovie}
              />
            :
              <MovieList
                listado={this.state.datos.results}
                loadDatos={this.loadDatos}
                handleClickMovie={this.handleClickMovie}
              />
          }
          <MoviePaginator
            data={this.state.datos}
            handlePaginator={this.handlePaginator}
            setPage={this.setPage}
          />

        </MovieLayout> 

        <FooterLayout>
          Datos del pie
        </FooterLayout>

      </HomeLayout>
    )
      

  }
}