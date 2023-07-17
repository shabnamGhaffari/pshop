import styles from "./pagination.module.css";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
const Pagination = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
  nextPage,
  prevPage,
}) => {
  const pagesCount = Math.ceil(Number(items) / Number(pageSize));
  console.log(pageSize);
  //   if (pagesCount === 1) return null;
  let pagesArray = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesArray.push(i);
  }
  console.log(pagesArray);
  const pages = Array.from(pageSize);
  console.log(pages);
  return (
    <>
      <ul className={styles.pagination}>
        <li class="page-item">
          {/* <a class="page-link" href="#"> */}
          <GrFormPrevious
            size={22}
            className="cursor-pointer"
            onClick={prevPage}
          />

          {/* </a> */}
        </li>
        {pagesArray.map(page => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }>
            <div className={styles.pageLink} onClick={() => onPageChange(page)}>
              {page}
            </div>
          </li>
        ))}
        <li class="page-item">
          {/* <a class="page-link" href="#"> */}
          <GrFormNext size={22} className="cursor-pointer" onClick={nextPage} />
          {/* </a> */}
        </li>
      </ul>
    </>
  );
};
export default Pagination;
