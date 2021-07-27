import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../redux/actions/Login'

const Header = () => {

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(startLogout())
    }

    return (
        <div>
            <button onClick={handleClose}>Cerrar Sesión</button>
        </div>
    )
}

export default Header
