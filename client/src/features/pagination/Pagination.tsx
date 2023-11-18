import Button from "components/ui/button/Button";
import { usePagination } from "features/pagination/hooks";
import { Stats } from "types/common";

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
    <>
      {pagination?.map((page, i) => (
        <Button key={i} onClick={() => handleClick(page)}>
          {page}
        </Button>
      ))}
    </>
  );
}
