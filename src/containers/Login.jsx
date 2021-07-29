import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../hooks/useForm'
import { startGoogleLogin, startLoginEmailPassword, startRegisterWithEmailPasswordName } from '../redux/actions/Login';
import { ButtonSend, ContainerForm, ContentForm, Form, Input,H2, H3, P, A, ImgLogin, Span, ImgLogo, FormSign } from './login-styled/LoginStyled';

const Login = () => {

    const dispatch = useDispatch();
    const error = useSelector(state => state.error)
    const [isRegister, setIsRegister] = useState(false)

    const formikRegister = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(5, 'Tu nombre es muy corto').required('Campo requerido'),
            email: yup.string().email('Tu email no es valido').required('Campo requerido'),
            password: yup.string().min(10, 'La contraseña debe ser mayor a 10 caracteres').required('Campo requerido'),
        }),
        onSubmit: (data) => {
            console.log(formikRegister)
            console.log(data)
            dispatch(startRegisterWithEmailPasswordName(data.email, data.password, data.name))
        }
    })

    const formikSign = useFormik({
        initialValues:{
            signEmail: '',
            signPassword: ''
        },
        validationSchema: yup.object({
            signEmail: yup.string().email('Tú email no es valido').required('Este campo es requerido'),
            signPassword: yup.string().required('Este campo es requerido')
        }),
        onSubmit: (data) => {
            console.log(data)
            dispatch(startLoginEmailPassword(data.signEmail, data.signPassword))
        }
    })

    const handleLogin = () => {
        dispatch(startGoogleLogin())
    }
console.log(formikSign)
    return (
        <ContainerForm>
        <ContentForm>
            <ImgLogo src="https://i.imgur.com/vcIFPQU.png" alt="" />
            {
                error?.message && <Span>{error?.message}</Span>
            }
            {
                isRegister ?
                <>
                <H2>Registrarte</H2>
                <Form onSubmit={formikRegister.handleSubmit}>
                    <h5>
                        {
                            formikRegister.errors.name
                        }
                    </h5>
                    <Input 
                        type="text"
                        name="name"
                        placeholder="Ingrese su nombre"
                        onChange={formikRegister.handleChange}

                    />
                    <h5>
                        {
                            formikRegister.errors.email
                        }
                    </h5>
                    <Input 
                        type="text"
                        name="email"
                        placeholder="Ingrese su correo"
                        onChange={formikRegister.handleChange}

                    />
                    <h5>
                        {
                            formikRegister.errors.password
                        }
                    </h5>
                    <Input 
                        type="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        onChange={formikRegister.handleChange}

                    />
                    <ButtonSend type="submit">Registrar</ButtonSend>
                </Form>
                <P>Ya tienes cuenta? <A href="#" onClick={() => {setIsRegister(false)}}>Inicia Sesión</A> </P>
                </> :
                <>
                <H2>Ininiar Sesión</H2>
                <FormSign onSubmit={formikSign.handleSubmit}>
                    <h5>
                        {
                            formikSign.errors.signEmail
                        }
                    </h5>
                    <Input 
                        type="text"
                        name="signEmail"
                        placeholder="Ingrese su correo"
                        onChange={formikSign.handleChange}
                    />
                    <h5>
                        {
                            formikSign.errors.signPassword
                        }
                    </h5>
                    <Input 
                        type="password"
                        name="signPassword"
                        placeholder="Ingrese su contraseña"
                        onChange={formikSign.handleChange}
                    />
                    <ButtonSend type="submit">Ingresar</ButtonSend>
                </FormSign>
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
