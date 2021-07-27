import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../hooks/useForm'
import { startGoogleLogin, startLoginEmailPassword, startRegisterWithEmailPasswordName } from '../redux/actions/Login';

const Login = () => {

    const dispatch = useDispatch();
    const error = useSelector(state => state.error)

    const [isRegister, setIsRegister] = useState(false)

    const [dataForm, handleChangeInput] = useForm({
        email: '',
        password: '',
        name: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(dataForm.email, dataForm.password))
    }

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(startRegisterWithEmailPasswordName(dataForm.email, dataForm.password, dataForm.name))
    }

    const handleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <div>
            <h1>Inicia con redes</h1>
            <img onClick={handleLogin} className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            {
                error?.message && <p>{error?.message}</p>
            }
            {
                isRegister ?
                <>
                <h1>Registrarte</h1>
                <form onSubmit={handleRegister}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Ingrese su nombre"
                        value={dataForm.name}
                        onChange={handleChangeInput}
                        required
                    />
                    <input 
                        type="email"
                        name="email"
                        placeholder="Ingrese su correo"
                        value={dataForm.email}
                        onChange={handleChangeInput}
                        required
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        value={dataForm.password}
                        onChange={handleChangeInput}
                        required
                    />
                    <button type="submit">Registrar</button>
                </form>
                <p>Ya tienes cuenta? <a href="#" onClick={() => {setIsRegister(false)}}>Inicia Sesión</a> </p>
                </> :
                <>
                <h1>Ininiar Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Ingrese su correo"
                        value={dataForm.email}
                        onChange={handleChangeInput}
                        required
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        value={dataForm.password}
                        onChange={handleChangeInput}
                        required
                    />
                    <button type="submit">Ingresar</button>
                </form>
                <p>No tienes cuenta? <a href="#" onClick={() => {setIsRegister(true)}}>Regístrate</a> </p>
                </>
            }
            
        </div>
    )
}

export default Login
