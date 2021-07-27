import types from '../types/types'

const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout: 
            return {}
    
        default:
            return state;
    }
}

export default LoginReducer
