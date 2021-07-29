import React, { useState } from 'react'
import { ContentCard, Etiqueta, ImgFilm } from './card-film-styled/CardFilmStyled'
import ModalMovie from './ModalMovie'
const raiting = 90
const CardFilm = ({movie, handleModal}) => {
console.log(movie.vote_average)
    return (
        <ContentCard>
            <Etiqueta raiting={movie.vote_average}>
                <img src="https://i.imgur.com/sitPeIs.png" alt="Puntuación" />
                {' '+ movie.vote_average}
            </Etiqueta>
            <ImgFilm src={movie?.image ? movie?.image :`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='Imagen' 
            onClick={()=> {handleModal(movie)}}/>
        </ContentCard>
    )
}

export default CardFilm
