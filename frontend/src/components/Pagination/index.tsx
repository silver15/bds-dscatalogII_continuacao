import { ReactComponent as ArrowIcon } from 'assets/image/seta.svg';
import ReactPaginate from 'react-paginate';
import './styles.css';

type Props = {
pageCount: number;
range: number;
onChange?: (pagerNumber: number)=> void;
}

const Pagination = ({ pageCount, range, onChange} : Props) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"

      onPageChange={(items) => (onChange) ? onChange(items.selected) : {}}

      previousLabel={<div className="pagination-arrows-container"><ArrowIcon /></div>}
      nextLabel={<div className="pagination-arrows-container"><ArrowIcon /></div>}
    />
  );
};

export default Pagination;
