import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Layout, Pagination } from "../../components"
import { FormMovies } from "../../components"
import { withAuth } from "../../hoc"
import { getBySearch } from "../../services/movies"


const MoviesPage = () => {

    type Movie = {
        poster_path: string;
    }

    const [movies, setMovies] = useState<Movie[]>([])
    const [params, setParams] = useState({query: ''})
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setSearchParams(params);
    }, [params])

    useEffect(() => {
        const query = searchParams.get('query')
        getBySearch({query: query || ''}).then((response) => {setMovies(response.results)})
        
    }, [searchParams])

    const setSearchQuery = (text: string) =>{
        setParams(prevState => ({...prevState, query: text }))
    }

    return (
        <Layout>
            <FormMovies onSearch={setSearchQuery}/>
            <div className='d-flex flex-wrap justify-content-center'>
           {
                movies.map(movie => (
                    <div className="movieContainer m-3">
                      <img src={`https://image.tmdb.org/t/p/original`+ movie.poster_path} height={400}/>
                    </div>
                ))
           }
            </div>
            <Pagination />
        </Layout>
    )
}

export const Movies = withAuth(MoviesPage)