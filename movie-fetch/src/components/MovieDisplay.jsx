import React from 'react'

function MovieDisplay({movie}) {
  return (
    <div className="movieDisplay">
        <h1 className="title">{movie.Title}</h1>
        <div className="flexbox">
            <img src={movie.Poster} alt="" className="poster" />
            <ul className="movieInfo">
                <li>Genre: {movie.Genre}</li>
                <li>Year: {movie.Year}</li>
                <li>{movie.Plot}</li>
            </ul>
        </div>
    </div>
  )
}

export default MovieDisplay