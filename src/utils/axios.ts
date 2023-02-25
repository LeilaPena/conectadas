import axios from "axios"

const apiMovies = axios.create({
    
})

const apiFirebase = axios.create({
    baseURL: "https://conectadas-lp-default-rtdb.firebaseio.com/"
})

export { apiFirebase}