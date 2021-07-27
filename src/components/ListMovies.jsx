import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listMoviesDb, registerMovieDb } from '../redux/actions/Movies'

const ListMovies = () => {

    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(listMoviesDb())
    }, [])

    console.log(movies)

    return (
        <div>
            {
                movies.map((movie) => (
                    <h1>{movie.title}</h1>
                ))
            }
        </div>
    )
}

export default ListMovies
