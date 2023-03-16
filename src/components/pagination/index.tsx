import { FC, useEffect, useState } from "react";
import { Pagination as PaginationRB } from "react-bootstrap";

type Props = {
  onClick: (page: string) => void;
  totalPages: number;
}

const Pagination: FC<Props> = ({onClick, totalPages}) => {

  const [page, setPage] = useState(1)

  useEffect(() => {
    onClick(page.toString())
  }, [page])

  return (
    <div className="d-flex justify-content-center">
      <PaginationRB size="sm">
        <PaginationRB.First onClick={() => setPage(1)} disabled={page === 1}/>
        <PaginationRB.Prev onClick={() => setPage((page) - 1)} disabled={page === 1}/>
        <PaginationRB.Item>{page}</PaginationRB.Item>
        <PaginationRB.Next onClick={() => setPage((page) + 1)} disabled={page === totalPages}/>
        <PaginationRB.Last onClick={() => setPage(totalPages)} disabled={page === totalPages}/>
      </PaginationRB>
    </div>
  );
};

export { Pagination };
