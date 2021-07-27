import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../redux/actions/Login'

const Home = () => {

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(startLogout())
    }

    return (
        <div>
            Soy Home
            <button onClick={handleClose}>Cerrar Sesión</button>
        </div>
    )
}

export default Home
