import styles from "./pagination.module.css";
const Pagination = ({items, pageSize, currentPage, onPageChange}) => {
  const pagesCount = Math.ceil(Number(items) / Number(pageSize)); 
  console.log(pageSize);
//   if (pagesCount === 1) return null;
let pagesArray=[];
for(let i=1;i<=pagesCount;i++){
    pagesArray.push(i)
}
console.log(pagesArray)
  const pages = Array.from(pageSize);
  console.log(pages);
  return (
    <div>
      <ul className={styles.pagination}>
        <li class="page-item">
          <a class="page-link" href="#">
            <i class="fa fa-angle-left"></i>
          </a>
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
          <a class="page-link" href="#">
            <i class="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
