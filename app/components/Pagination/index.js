// components/Pagination/index.js
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ pageCount, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected)}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
