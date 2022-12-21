import React from 'react'

function Movie(props) {
  return (
    <div className="movie-card" style={{backgroundImage: 'url(' + props.poster + ')'}}>
        <span>{props.name}</span>
    </div>
  )
}

export default Movie