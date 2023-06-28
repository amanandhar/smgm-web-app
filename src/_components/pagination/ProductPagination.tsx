import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

export interface IProductPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const ProductPagination = (props: IProductPaginationProps) => {
  const [activePage, setActivePage] = useState(props.currentPage);

  const handlePageChange = (page: number) => {
    setActivePage(page);
    props.onPageChange(page);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    const showPrevButton = activePage > 1;
    const showNextButton = activePage < props.totalPages;

    paginationItems.push(
      <li
        key="prev"
        className={`page-item ${showPrevButton ? "" : "disabled"}`}
      >
        <button
          className="page-link"
          disabled={!showPrevButton}
          onClick={() => handlePageChange(activePage - 1)}
        >
          Prev
        </button>
      </li>
    );

    if (props.totalPages <= 7) {
      for (let i = 1; i <= props.totalPages; i++) {
        const isActive = activePage === i;

        paginationItems.push(
          <li key={i} className={`page-item ${isActive ? "active" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(i)}>
              {i}
            </button>
          </li>
        );
      }
    } else {
      let start = Math.max(1, activePage - 2);
      let end = Math.min(props.totalPages, start + 4);

      if (start > 1) {
        paginationItems.push(
          <li key="start-ellipsis" className="page-item disabled">
            <button className="page-link">...</button>
          </li>
        );
      }

      for (let i = start; i <= end; i++) {
        const isActive = activePage === i;

        paginationItems.push(
          <li key={i} className={`page-item ${isActive ? "active" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(i)}>
              {i}
            </button>
          </li>
        );
      }

      if (end < props.totalPages) {
        paginationItems.push(
          <li key="end-ellipsis" className="page-item disabled">
            <button className="page-link">...</button>
          </li>
        );
      }
    }

    paginationItems.push(
      <li
        key="next"
        className={`page-item ${showNextButton ? "" : "disabled"}`}
      >
        <button
          className="page-link"
          disabled={!showNextButton}
          onClick={() => handlePageChange(activePage + 1)}
        >
          Next
        </button>
      </li>
    );

    return paginationItems;
  };

  return (
    <nav>
      <ul className="pagination">{renderPaginationItems()}</ul>
    </nav>
  );
};
