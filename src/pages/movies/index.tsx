import { useEffect, useState } from "react"
import { Layout } from "../../components"
import { withAuth } from "../../hoc"
import { apiMovies } from "../../utils/axios"


const MoviesPage = () => {

    const [movies, setMovies] = useState<any[]>([])

    useEffect(() => {
        apiMovies.get('/movie/top_rated').then(response => setMovies(response.data.results))
    }, [])

    return (
        <Layout>
            <div className='d-flex flex-wrap justify-content-center'>
           {
                movies.map(movie => (
                    <div className="movieContainer m-3">
                      <img src={`https://image.tmdb.org/t/p/original`+ movie.poster_path} height={400}/>
                    </div>
                ))
           }
            </div>
        </Layout>
    )
}

export const Movies = withAuth(MoviesPage)