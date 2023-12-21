import * as CoinAPI from "API/coinRankingApi";
import CoinsTable from "features/coinsTable/CoinsTable";
import CoinsTableLoading from "features/coinsTable/Loading";
import Pagination from "features/pagination/Pagination";
import { Suspense, useState } from "react";

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

      <Suspense fallback={<CoinsTableLoading />}>
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
