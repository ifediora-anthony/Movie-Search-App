import React, { useState, useEffect } from 'react'
import MovieSet from './MovieSet'
import Search from './Search'
import axios from 'axios';

function AppMain() {
  const [defaultMovies, setDefaultMovies] = useState({
    sci_fi: [],
    horror: []
  });

  const [showDefaultMovies, setShowDefaultMovies] = useState(true);
  const [searchString, setSearchString] = useState('');
  const [movieList, setMovieList] = useState([]);


  useEffect(() => {
    if (searchString.length == 0) {
      setShowDefaultMovies(true)
      // console.log('showing default videos')

      axios.all([
        axios.get('https://www.omdbapi.com/?s=ant-man&apikey=7e50e67f'),
        axios.get('https://www.omdbapi.com/?s=vampire&apikey=7e50e67f')
      ])
        .then(responseArr => {
          // console.log(res.data.Search)
          setDefaultMovies({
            ...defaultMovies,
            sci_fi: responseArr[0].data.Search,
            horror: responseArr[1].data.Search
          })
        })
        .catch(err => {
          console.log(err)
        })


    } else {
      setShowDefaultMovies(false)
      // console.log('showing searched videos')

      axios
        .get('https://www.omdbapi.com/?s=' + searchString + '&apikey=7e50e67f')
        .then(
          res => {
            // console.log(res.data.Search)
            setMovieList(res.data.Search)
          }
        )
        .catch(
          err => {
            console.log(err)
          }
        )
    }

  }, [searchString]);


  return (
    <main className='app-main row'>
      <Search setSearchString={setSearchString} />

      {
        (!showDefaultMovies) ?
          <MovieSet movieList={movieList} /> :
          <>
            <MovieSet movieList={defaultMovies.sci_fi} category="Sci-fi" />
            <MovieSet movieList={defaultMovies.horror} category="Horror Movies" />
          </>
      }

    </main>
  )
}

export default AppMain