import React from 'react'
import { ContentCard, Etiqueta, ImgFilm } from './card-film-styled/CardFilmStyled'
const raiting = 90
const CardFilm = () => {
    return (
        <ContentCard>
            <Etiqueta raiting={raiting}>"star"{raiting}</Etiqueta>
            <ImgFilm src='https://es.web.img2.acsta.net/pictures/19/11/12/12/25/0815514.jpg' alt=''/>
        </ContentCard>
    )
}

export default CardFilm
