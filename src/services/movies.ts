import { apiMovies } from "../utils/axios"


const getBySearch = async (params: {query?: string, page?: string}) => {
    const response = await apiMovies.get('/search/movie', {params});
    
    return response.data
}
export { getBySearch }