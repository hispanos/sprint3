import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardFilm from '../components/CardFilm';
import useForm from '../hooks/useForm'
import { startGoogleLogin, startLoginEmailPassword, startRegisterWithEmailPasswordName } from '../redux/actions/Login';
import { ButtonSend, ContainerForm, ContentForm, Form, Input,H2, H3, P, A, ImgLogin, Span, ImgLogo } from './login-styled/LoginStyled';

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
        <ContainerForm>
            <CardFilm />
        <ContentForm>
            <ImgLogo src="https://i.imgur.com/vcIFPQU.png" alt="" />
             {
                error?.message && <Span>{error?.message}</Span>
            }
            {
                isRegister ?
                <>
                <H2>Registrarte</H2>
                <Form onSubmit={handleRegister}>
                    <Input 
                        type="text"
                        name="name"
                        placeholder="Ingrese su nombre"
                        value={dataForm.name}
                        onChange={handleChangeInput}
                        required
                    />
                    <Input 
                        type="email"
                        name="email"
                        placeholder="Ingrese su correo"
                        value={dataForm.email}
                        onChange={handleChangeInput}
                        required
                    />
                    <Input 
                        type="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        value={dataForm.password}
                        onChange={handleChangeInput}
                        required
                    />
                    <ButtonSend type="submit">Registrar</ButtonSend>
                </Form>
                <P>Ya tienes cuenta? <A href="#" onClick={() => {setIsRegister(false)}}>Inicia Sesión</A> </P>
                </> :
                <>
                <H2>Ininiar Sesión</H2>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        type="email"
                        name="email"
                        placeholder="Ingrese su correo"
                        value={dataForm.email}
                        onChange={handleChangeInput}
                        required
                    />
                    <Input 
                        type="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        value={dataForm.password}
                        onChange={handleChangeInput}
                        required
                    />
                    <ButtonSend type="submit">Ingresar</ButtonSend>
                </Form>
                <P>No tienes cuenta? <A href="#" onClick={() => {setIsRegister(true)}}>Regístrate</A> </P>
                </>
            }
            <H3>Inicia con redes</H3>
            <ImgLogin onClick={handleLogin} className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />

        </ContentForm>
        </ContainerForm>
    )
}

export default Login
