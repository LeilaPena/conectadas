import { useEffect, useState } from "react"
import { Layout } from "../../components"
import { apiMovies } from "../../utils/axios"

const Movies = () => {

    const [movies, setMovies] = useState<any[]>([])

    useEffect(() => {
        apiMovies.get('/movie/top_rated').then(response => setMovies(response.data.results))
    }, [])

    return (
        <Layout>
           {
                movies.map(movie => (
                    <div>
                      <img src={`https://image.tmdb.org/t/p/original`+ movie.poster_path} height={600}/>
                      <p>{movie.title}</p>
                    </div>
                ))
           }
        </Layout>
    )
}

export {Movies}