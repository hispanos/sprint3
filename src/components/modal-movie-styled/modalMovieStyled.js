import styled from 'styled-components'


export const ContentModal = styled.div`
    background-color: transparent;
    width: 90%;
    padding: 10px 20px;
    margin: 10% auto;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 2fr;
    text-align: center;
`
export const Modal = styled.div`
    background-color: rgba(0,0,0,.9);
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom: 0;
    opacity:1;
    transition: all 1s;
    z-index: 100;
`
export const ButtonBack = styled.button`
    background-color: antiquewhite;
    grid-column: 1/4;
    width: 10%;
    height: 2rem;
    position: absolute;
    right: 0;
    border: 0;
    background-color: #FED941;
    border-radius: 10px;
`
export const ImgFilmModal = styled.img`
    margin: auto;
    width: 180px;
    height: 250px;
    object-fit: cover;
    border-radius: 1rem;

`

export const ContentDetalle = styled.div`
    padding: 2rem;
    h2{
        color: white;
    }
    p{
        color: white;
    }
`

export const ContentButtonAction = styled.div`
    display: flex;
    justify-content: space-around;
    button{
        border: 0;
        background-color: #FED941;
        border-radius: 10px;
        width: 40%;
        padding: 0.4rem 1rem;
    }
`