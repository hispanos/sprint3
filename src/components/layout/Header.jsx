import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../redux/actions/Login'
import InputSearch from '../InputSearch'
import { Container, Menu, MenuItem, ImageLogo } from './header-styles/HeaderStyles'

const Header = () => {
    const [hideSearch, setHideSearch] = useState(true)
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
                <MenuItem><NavLink to="/" onClick={() => setHideSearch(true)}>Inicio</NavLink></MenuItem>
                <MenuItem><NavLink to="/admin" onClick={() => setHideSearch(false)}>Administrar</NavLink></MenuItem>
                <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
            </Menu>
            <MenuItem>{session.name}</MenuItem>
            {
                hideSearch && <InputSearch />
            }
        </Container>
        </>
    )
}

export default Header
