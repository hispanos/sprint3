import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listMoviesDb, listMoviesRender, registerMovieDb } from '../redux/actions/Movies'
import CardFilm from './CardFilm'
import Carousel from './layout/Carousel'
import Pagination from './layout/Pagination'
import { ContainerMovies, Title } from './list-movies-styles/ListMoviesStyles'

const ListMovies = () => {

    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movies)
    const {moviesRender} = useSelector(state => state.movies)

    //const [moviesShow, setMoviesShow] = useState([])
    const [pagination, setPagination] = useState({start: 0, end: 10})

    useEffect(() => {
        dispatch(listMoviesDb())
        //setMoviesShow(movies.slice(pagination.start, pagination.end))
    }, [])

    useEffect(() => {
        dispatch(listMoviesRender(movies.slice(pagination.start, pagination.end)))
    }, [pagination])

    return (
        <div>
            <Carousel />
            <Title>Todas las películas</Title>
            <ContainerMovies>
                {
                    moviesRender?.map((movie, index) => (
                        <CardFilm key={index} movie={movie} />
                    ))
                }
            </ContainerMovies>
            <Pagination setPagination={setPagination} pagination={pagination} data={movies} />
        </div>
    )
}

export default ListMovies
