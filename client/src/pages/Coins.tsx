import { Suspense, useState, lazy } from "react";

import * as CoinAPI from "API/coinRankingApi";
import CoinsTableSkeleton from "features/coinsTable/CoinsTableSkeleton";


import Pagination from "features/pagination/Pagination";

const CoinsTable = lazy(() => import("features/coinsTable/CoinsTable"));

import styles from "styles/utils.module.css";

export default function Coins() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 100;
  const offset = (currentPage - 1) * limit;

  const { data } = CoinAPI.getCoins({ limit, offset });
  const { coins, stats } = data?.data || {};

  const handleClick = (page: string | number) => {
    setCurrentPage(Number(page));
  };

  return (
    <>
      <h1
        className={styles.justify_align_center}
        style={{ paddingTop: "2rem", paddingBottom: "1.25rem" }}
      >
        Best Coin Price Tracker on the Market
      </h1>

      <Suspense fallback={<CoinsTableSkeleton rows={100} />}>
        <CoinsTable coins={coins} />
      </Suspense>

      <Pagination
        stats={stats}
        currentPage={currentPage}
        handleClick={handleClick}
      />
    </>
  );
}
