import React from 'react'
import { ContentCard, Etiqueta, ImgFilm } from './card-film-styled/CardFilmStyled'
import CardFilm from './CardFilm'
import { ButtonBack, ContentButtonAction, ContentDetalle, ContentModal, ImgFilmModal, Modal } from './modal-movie-styled/modalMovieStyled'

const ModalMovie = ({dataModal, setShowModal}) => {
    console.log(dataModal)
    return (
        <Modal>
            <ContentModal>
                <ButtonBack onClick={()=> {setShowModal(false)}}>X</ButtonBack>
                <ContentCard>
                    {/* <Etiqueta raiting={dataModal.vote_average}>
                        <img src="https://i.imgur.com/sitPeIs.png" alt="Puntuación" />
                        {' '+dataModal.vote_average}
                    </Etiqueta> */}
                    <ImgFilmModal src={`https://image.tmdb.org/t/p/w500${dataModal.poster_path}`} alt='Imagen'/>
                </ContentCard>
                <ContentDetalle>
                    <h2>{dataModal.original_title}</h2>
                    <p>{dataModal.overview}</p>
                    <span>{dataModal.release_date}</span>
                    <ContentButtonAction>
                        <button>Ver ahora</button>
                        <button>Ver más tarde</button>
                    </ContentButtonAction>
                </ContentDetalle>
            </ContentModal>  
        </Modal>
    )
}

export default ModalMovie
