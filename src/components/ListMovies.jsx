import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listMoviesDb, registerMovieDb } from '../redux/actions/Movies'
import CardFilm from './CardFilm'
import { ContainerMovies, Title } from './list-movies-styles/ListMoviesStyles'

const ListMovies = () => {

    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(listMoviesDb())
    }, [])

    console.log(movies)

    return (
        <div>
            <Title>Todas las películas</Title>
            <ContainerMovies>
                {
                    movies.map((movie, index) => (
                        <CardFilm key={index} movie={movie} />
                    ))
                }
            </ContainerMovies>
        </div>
    )
}

export default ListMovies
