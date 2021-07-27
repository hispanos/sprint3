import types from "../types/types"

const ErrorReducer = (state = {}, action) => {
    switch (action.type) {
        case types.error:
            return action.payload
    
        default:
            return state;
    }
}

export default ErrorReducer
