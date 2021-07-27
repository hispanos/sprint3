import React from 'react'
import { ContentCard, Etiqueta, ImgFilm } from './card-film-styled/CardFilmStyled'
const raiting = 90
const CardFilm = ({movie}) => {

    return (
        <ContentCard>
            <Etiqueta raiting={movie.vote_average}>
                <img src="https://i.imgur.com/sitPeIs.png" alt="Puntuación" />
                {' '+movie.vote_average}
            </Etiqueta>
            <ImgFilm src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='Imagen'/>
        </ContentCard>
    )
}

export default CardFilm
