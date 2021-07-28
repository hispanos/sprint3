import React from 'react'
import { ContentCard, Etiqueta, ImgFilm } from './card-film-styled/CardFilmStyled'
import CardFilm from './CardFilm'
import { ButtonBack, ContentButtonAction, ContentDetalle, ContentModal, ImgFilmModal, Modal, SpanDate } from './modal-movie-styled/modalMovieStyled'

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
                    <h2>{dataModal.title}</h2>
                    <p>{dataModal.overview}</p>
                    <SpanDate>Lanzamiento: {dataModal.release_date}</SpanDate>
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
