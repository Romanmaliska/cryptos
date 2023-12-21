import Button from "components/ui/button/Button";
import { usePagination } from "features/pagination/hooks";
import { Stats } from "types/common";

import styles from "./Pagination.module.css";

type Props = {
  stats: Stats;
  currentPage: number;
  handleClick: (page: string | number) => void;
};

export default function Pagination({ stats, currentPage, handleClick }: Props) {
  const { totalCoins } = stats || {};

  if (!totalCoins) return null;

  const pagination = usePagination({ totalCoins, currentPage });

  return (
    <section className={styles.pagination}>
      {pagination?.map((page, i) =>
        page === "..." ? (
          <span key={i}>...</span>
        ) : (
          <Button key={i} onClick={() => handleClick(page)}>
            {page}
          </Button>
        )
      )}
    </section>
  );
}
