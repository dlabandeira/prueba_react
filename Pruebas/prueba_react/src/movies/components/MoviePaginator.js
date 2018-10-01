import React from 'react';
import MoviePage from './MoviePage';

const MoviePaginator = props => {

    if(props.data.total_results){
      
      let init; let fin; let pages = [];
      let numPages = parseInt(props.data.total_results / 20,10).toFixed(0);
      ((props.data.page-14)<0) ? init = 1 : init = props.data.page-14;
      ((props.data.page+14)>numPages) ? fin = numPages : fin = props.data.page+14;

      for(let i=init; i<=fin; i++){
        pages.push(i);
      }

      return (
        <div className='moviePaginator col-12'>
        {
          pages.map((page) => {
             return (
                <MoviePage 
                  id={page}
                  key={page}
                  currentGenre={props.data.page}
                  currentPage={props.data.page}
                  handlePaginator = {props.handlePaginator}
                />
              )
          })
        }
        </div>
      )

   }
   return (<div></div>);
}

export default MoviePaginator;