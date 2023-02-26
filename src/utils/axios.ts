import axios from "axios"

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '46525cdd4765ceb0ed174e5c2e72a015',
    }
})

const apiFirebase = axios.create({
    baseURL: "https://conectadas-lp-default-rtdb.firebaseio.com/"
})

export { apiFirebase, apiMovies}
