import types from '../types/types'
import {firebase, db} from '../../firebase/firebaseConfig'

export const createError = (error) => {
    return (
        {
            type: types.error,
            payload: error
        }
    )
}

export const registerMovie = (movie) => {
    return {
        type: types.newMovie,
        payload: movie
    }
}

export const registerMovieDb = (movie) => {
    return async (dispatch) => {

        const newMovie = movie

        try {
            const data = await db.collection(`/movies`).add(newMovie);
            console.log(data)
            dispatch(registerMovie(newMovie))
        } catch (error) {
            console.log(error)
            dispatch(createError({
                message: 'Hubo un error al guardar los datos'
            }))
        }
        
    }
}

export const listMovies = (movies) => {
    return {
        type: types.listMovie,
        payload: movies
    }
}

export const listMoviesDb = () => {
    return async(dispatch) => {
        const data = await db.collection('/movies').get();
        const movies = []
        data.docs.forEach(movie => {
            movies.push(movie.data())
        });        
        dispatch(listMovies(movies))
    }
}
