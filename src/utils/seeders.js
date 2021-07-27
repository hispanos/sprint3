
const seeders = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=6940bb378c5f7bbc9f2c4d339362791d&language=en-US&page=1').then((response) => {
        response.json().then((movies) => {
            const {results} = movies;
            results.forEach(movie => {
                dispatch(registerMovieDb(movie))
            });
        })
    })
}

export default seeders
