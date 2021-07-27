import React from 'react'
import { ContentModal, Modal } from './modal-movie-styled/modalMovieStyled'

const ModalMovie = ({dataModal, setShowModal}) => {
    return (
        <Modal>
            <ContentModal>
                <button onClick={()=> {setShowModal(false)}}>xd</button>
                <h2>Mi primer Modal</h2>
                <p>{dataModal.title}</p>
            </ContentModal>  
        </Modal>
    )
}

export default ModalMovie
