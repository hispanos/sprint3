
const seeders = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=de16af1960c81cd614b51dbb68262f7f&language=es-ES&page=1').then((response) => {
        response.json().then((movies) => {
            const {results} = movies;
            results.forEach(movie => {
                dispatch(registerMovieDb(movie))
            });
        })
    })
}

export default seeders
