import types from '../types/types'

const MoviesReducer = (state = {movies: []}, action) => {
    switch (action.type) {
        case types.listMovie:
            return {
                ...state,
                movies: action.payload,
            }

        case types.newMovie: 
            return {
                ...state,
                movies: [action.payload, ...state.movies]
            }
    
        default:
            return state;
    }
}

export default MoviesReducer
