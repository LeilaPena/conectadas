import {ChevronLeft, ChevronRight, ChevronDoubleRight, ChevronDoubleLeft} from "react-bootstrap-icons"
import "./style.scss"


const Pagination = () => {



    return (
        <div className="containerPagination d-flex justify-content-center">
            <button> <ChevronDoubleLeft size={15}/> </button>
            <button> <ChevronLeft size={15}/> </button>
            <button> 1 </button>
            <button> <ChevronRight size={15}/> </button>
            <button> <ChevronDoubleRight size={15}/> </button>

        </div>
    )
}

export { Pagination }