import { firebase, googleAuthProvider } from '../../firebase/firebaseConfig';
import types from '../types/types';

export const createError = (error) => {
    return (
        {
            type: types.error,
            payload: error
        }
    )
}

export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            const {user} = response
            dispatch(login(user.uid, user.displayName));
        } catch (error) {
            dispatch(createError({
                message: error.message
            }))
        }
        
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return async (dispatch) => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            const {user} = response;
            await user.updateProfile({ displayName: name });
            dispatch(login(user.uid, user.displayName));
        } catch (error) {
            dispatch(createError({
                message: error.message
            }))
        }
        
    }
}



export const startGoogleLogin = () => {
    return async (dispatch) => {
        try {
            const response = await firebase.auth().signInWithPopup(googleAuthProvider)
            const {user} = response;
            dispatch(login(user.uid, user.displayName))
        } catch (error) {
            dispatch(createError({
                message: error.message
            }))
        }
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();
        dispatch( logout() );
    }
}


export const logout = () => ({
    type: types.logout
})