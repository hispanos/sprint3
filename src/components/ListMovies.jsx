import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listMoviesDb, registerMovieDb } from '../redux/actions/Movies'
import CardFilm from './CardFilm'
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

    useEffect(() => {
        dispatch(listMoviesDb())
    }, [])

    console.log(movies)

    return (
        <div>
            <Title>Todas las películas</Title>
            <ContainerMovies>
                {
                        showModal && <ModalMovie  
                        dataModal={dataModal} 
                        setShowModal={setShowModal}
                        />
                }
                {
                    movies.map((movie, index) => (
                        <CardFilm 
                        key={index} 
                        movie={movie} 
                        handleModal={handleModal} 
                        />
                    ))
                }
            </ContainerMovies>
        </div>
    )
}

export default ListMovies
