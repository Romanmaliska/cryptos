import { useMemo } from "react";
import { paginationRange } from "features/pagination/utils";

type Props = {
  totalCoins: number;
  currentPage: number;
};

export const usePagination = ({ currentPage, totalCoins }: Props) => {
  const pagination = useMemo(() => {
    const pageSize = 100;
    const totalPageCount = Math.ceil(totalCoins / pageSize);
    const siblingCount = 1;
    const pagesSeparator = "...";

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = paginationRange(1, leftItemCount);

      return [...leftRange, pagesSeparator, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = paginationRange(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, pagesSeparator, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = paginationRange(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, pagesSeparator, ...middleRange, pagesSeparator, lastPageIndex];
    }
  }, [totalCoins, currentPage]);

  return pagination;
};
