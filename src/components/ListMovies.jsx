import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listMoviesDb } from '../redux/actions/Movies'
import CardFilm from './CardFilm'
import { ContainerMovies } from './list-movies-styles/ListMoviesStyles'

const ListMovies = () => {

    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(listMoviesDb())
    }, [])

    console.log(movies)

    return (
        <ContainerMovies>
            {
                movies.map((movie, index) => (
                    <CardFilm key={index} movie={movie} />
                ))
            }
        </ContainerMovies>
    )
}

export default ListMovies
