import React from 'react'
import Movie from './Movie'

function MovieSet(props) {

  const movieArray = props.movieList.map( (movie, index) => <Movie name={movie.Title} poster={movie.Poster} key={index} /> );
  
  // console.log(movieArray)

  return (
    <div className="movie-set">
      <h2 className="movie-category">{props.category}</h2>
      {/* <h2 className="movie-category">Movie Category Name</h2> */}

      <div className="movie-container">

          {movieArray}

        {/* <Movie name="movie 1" poster="img" />
        <Movie name="movie 2" poster="img" />
        <Movie name="movie 3" poster="img" />
        <Movie name="movie 4" poster="img" />
        <Movie name="movie 5" poster="img" />
        <Movie name="movie 6" poster="img" />
        <Movie name="movie 7" poster="img" />
        <Movie name="movie 8" poster="img" />
        <Movie name="movie 9" poster="img" />
        <Movie name="movie 10" poster="img" /> */}
      </div>
    </div>
  )
}

export default MovieSet