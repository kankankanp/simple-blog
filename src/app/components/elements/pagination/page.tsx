"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import "@/scss/pagination.scss";

// type Props = {
//   totalCount: number;
// };

const range = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i);

const PER_PAGE = 4;

const Pagination = ({ totalCount }: any) => {
  const params = useParams();
  const currentPage = params?.page ? Number(params.page) : 1;

  return (
    <ul className="pagination">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li
          className={`pagination__item ${
            currentPage === number ? "is-active" : ""
          }`}
          key={index}
        >
          <Link
            className="pagination__item-link"
            href={number === 1 ? "/blog" : `/blog/page/${number}`}
            aria-current={currentPage === number ? "page" : undefined}
          >
            {number}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
