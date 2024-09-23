import React from 'react'

function MovieDisplay({movie}) {

    function loaded(){
        return (
        <div className="movieDisplay">
            <h1 className="movieName">{movie.Title}</h1>
            <section className='flexbox'>
                <img src={movie.Poster} alt="" className="poster"/>
                <section>
                    <h3>{movie.Year} - {movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                </section>
            </section>
        </div>
        )
    }

    function loading(){
        return (<h1>...Loading Movie</h1>)
    }
    return movie? loaded() : loading()
}

export default MovieDisplay