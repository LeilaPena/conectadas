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
    const [totalPages, setTotalPages] = useState(Number)

    const [params, setParams] = useState({ page: '1', query: ''})
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setSearchParams(params);
    }, [params])

    useEffect(() => {
        const query = searchParams.get('query');
        const page = searchParams.get('page');

        getBySearch({query: query || '', page: page || ""}).then((response) => {
            setMovies(response.results)
            setTotalPages(response.total_pages)
        })
        
    }, [searchParams])

    const setSearchQuery = (text: string) =>{
        setParams(prevState => ({...prevState, query: text }))
        
    }

    const setPage = (page: string) => {
        setParams(prevState => ({...prevState, page: page }))
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
            {movies.length !== 0 && <Pagination onClick={(setPage)} totalPages={totalPages}/>}
        </Layout>
    )
}

export const Movies = withAuth(MoviesPage)