
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../hooks/useForm'
import { FormAdd } from './add-film-styled/AddFilmStyled'
import { ButtonBack,  ContentModal, Modal } from './modal-movie-styled/modalMovieStyled'
import { addNewMovie } from '../redux/actions/Movies'
const AddFilm = () => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const [dataForm, handleChangeInput, handleChangeForm, reset] = useForm({
        title: '',
        video:'',
        image: '',
        overview: '',
        release_date: '',
        vote_average: ''
    })
    const {title, video, image, release_date, overview, vote_average } = dataForm

    const handleSaveSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewMovie(dataForm))
        reset()
    }
    return (
        <>
            <button onClick={()=> setShowModal(true)}>Agregar pelicula</button>
            {
                showModal &&             
                <Modal>
                    <ButtonBack onClick={()=> setShowModal(false)}>X</ButtonBack>
                    <FormAdd onSubmit={handleSaveSubmit}>
                        <label>Titulo</label>
                        <input type="text" 
                        name='title'
                        value={title}             
                        onChange={handleChangeInput} />
                        
                        <label>Url imagen</label>
                        <input type="text" 
                        name='image'
                        value={image} 
                        onChange={handleChangeInput} />

                        <label>Url trailer</label>
                        <input type="text" 
                        name='video'
                        value={video}
                        onChange={handleChangeInput} />

                        <label>Fecha de estreno</label>
                        <input type="text" 
                        name='release_date'
                        value={release_date}
                        onChange={handleChangeInput} />

                        <label>Calificación</label>
                        <input type="number" 
                        name='vote_average'
                        value={vote_average}
                        onChange={handleChangeInput} />

                        <label>Descripción</label>
                        <textarea 
                        name="overview" 
                        value={overview}
                        onChange={handleChangeInput}
                        cols="30" 
                        rows="2"
                        ></textarea>
                        <button type='submit'>Guardar</button>
                    </FormAdd>
                </Modal>
            }
        </>
    )
}

export default AddFilm
