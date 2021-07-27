import styled from 'styled-components'


export const ContentModal = styled.div`
    background-color: transparent;
    width:300px;
    padding: 10px 20px;
    margin: 20% auto;
    position: relative;
`
export const Modal = styled.div`
    background-color: rgba(0,0,0,.8);
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    opacity:1;
    transition: all 1s;
    z-index: 100;
`