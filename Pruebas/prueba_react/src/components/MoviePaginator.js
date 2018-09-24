import React from 'react';
import MoviePage from './MoviePage';

const MoviePaginator = props => {
    //console.log(props.data);
    if(props.data.movie_count){
      
      let init; let fin; let pages = [];
      let numPages = parseInt(props.data.movie_count / props.data.limit).toFixed(0);
      ((props.data.page_number-14)<0) ? init = props.data.page_number : init = props.data.page_number-14;
      ((props.data.page_number+14)>numPages) ? fin = numPages : fin = props.data.page_number+14;

      for(let i=init; i<=fin; i++){
        pages.push(i);
      }
      
      return (
        pages.map((page) => {
           return (
              <MoviePage 
                id={page}
                key={page}
                currentPage={props.data.page_number}
                handlePaginator = {props.handlePaginator}
              />
            )
        })
      )

   }
   return (<h1></h1>);
}

export default MoviePaginator;