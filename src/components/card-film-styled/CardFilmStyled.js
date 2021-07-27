import styled from 'styled-components'

export const ImgFilm = styled.img`
    width: 180px;
    height: 250px;
    object-fit: cover;
    border-radius: 1rem;
`

export const ContentCard = styled.div`
    display: flex;
    width: auto;
    padding: 10px;
    position: relative;
`
export const Etiqueta = styled.div`
    align-items: center;
    display: flex;
    width: 3.5rem;
    height: 1.7rem;
    border: 2px solid ${(({raiting}) => raiting > 7? '#FED941': '#5F78B2' )};
    border-radius: 0 10rem 10rem 0;
    position: absolute;
    top: 1.5rem;
    background-color: rgba(0, 0, 0, .5);
    color: white;
`