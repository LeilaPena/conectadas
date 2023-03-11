import { Pagination as PaginationRB } from "react-bootstrap";

const Pagination = () => {
  return (
    <div className="d-flex justify-content-center">
      <PaginationRB size="sm">
        <PaginationRB.First />
        <PaginationRB.Prev />
        <PaginationRB.Item>{1}</PaginationRB.Item>
        <PaginationRB.Next />
        <PaginationRB.Last />
      </PaginationRB>
    </div>
  );
};

export { Pagination };
