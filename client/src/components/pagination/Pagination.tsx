import { usePagination } from "../../hooks/usePagination";
import { Stats } from "../../types/common";

type Props = {
  stats: Stats;
  currentPage: number;
  handleClick: (page: string | number) => void;
};

export default function Pagination({ stats, currentPage, handleClick }: Props) {
  const { totalCoins } = stats;
  const pagination = usePagination({ totalCoins, currentPage });

  return (
    <>
      {pagination?.map((page, i) => (
        <button key={i} onClick={() => handleClick(page)}>
          {page}
        </button>
      ))}
    </>
  );
}
