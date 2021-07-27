import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../redux/actions/Login'
import { Container, Menu, MenuItem, ImageLogo } from './header-styles/HeaderStyles'

const Header = () => {

    const dispatch = useDispatch()
    const session = useSelector(state => state.session)

    const handleClose = () => {
        dispatch(startLogout())
    }

    return (
        <>
        <Container>
            <Menu>
                <ImageLogo src="https://i.imgur.com/vcIFPQU.png" />
                <MenuItem><NavLink to="/">Inicio</NavLink></MenuItem>
                <MenuItem><NavLink to="/admin">Administrar</NavLink></MenuItem>
                <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
            </Menu>
            <MenuItem>{session.name}</MenuItem>
        </Container>
        </>
    )
}

export default Header
