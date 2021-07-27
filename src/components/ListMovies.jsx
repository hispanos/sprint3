import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listMoviesDb, listMoviesRender, registerMovieDb } from '../redux/actions/Movies'
import CardFilm from './CardFilm'
import Carousel from './layout/Carousel'
import Pagination from './layout/Pagination'
import { ContainerMovies, Title } from './list-movies-styles/ListMoviesStyles'
import ModalMovie from './ModalMovie'

const ListMovies = () => {
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState({}) 
    const handleModal = (data) => {
        setShowModal(true)
        setDataModal(data)
    }

    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movies)
    const {moviesRender} = useSelector(state => state.movies)

    const [pagination, setPagination] = useState({start: 0, end: 10})

    useEffect(() => {
        dispatch(listMoviesDb())
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
                    showModal && <ModalMovie  
                    dataModal={dataModal} 
                    setShowModal={setShowModal}
                    />
                }
                {
                    moviesRender?.map((movie, index) => (
                        <CardFilm 
                        key={index} 
                        movie={movie} 
                        handleModal={handleModal} 
                        />
                    ))
                }
            </ContainerMovies>
            <Pagination setPagination={setPagination} pagination={pagination} data={movies} />
        </div>
    )
}

export default ListMovies
