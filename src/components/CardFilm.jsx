import React from 'react'
import { ContentCard, Etiqueta, ImgFilm } from './card-film-styled/CardFilmStyled'
const raiting = 2
const colorT = raiting > 50? '#0d0dff' : '#ff8801'
const CardFilm = () => {
    return (
        <ContentCard>
            <Etiqueta color={colorT}>"star"{raiting}</Etiqueta>
            <ImgFilm src='https://es.web.img2.acsta.net/pictures/19/11/12/12/25/0815514.jpg' alt=''/>
        </ContentCard>
    )
}

export default CardFilm
