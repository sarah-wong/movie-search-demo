import React from 'react'

function MovieDisplay({movie}) {

    function loaded(){
        return (
            <div className="movieDisplay">
                <h1 className="title">{movie.Title}</h1>
                <div className="flexbox">
                    <img src={movie.Poster} alt="" className="poster" />
                    <ul className="movieInfo">
                        <li>Genre: {movie.Genre}</li>
                        <li>Year: {movie.Year}</li>
                        <li>{movie.Awards}</li>
                        <li>{movie.Plot}</li>
                    </ul>
                </div>
            </div>
        )
    }

    function loading(){
        return (<h1>...Loading Movie</h1>)
    }
    return movie? loaded() : loading()
}

export default MovieDisplay