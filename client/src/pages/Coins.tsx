import { useState } from "react";
import * as CoinAPI from "../API/coinRankingApi";
import CoinsTable from "../components/coinsTable/CoinsTable";
import Pagination from "../components/pagination/Pagination";
import { Coins } from "../types/common";

export default function Coins() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 100;
  const offset = (currentPage - 1) * limit;

  const {
    data,
    isLoading,
    isError: error,
  } = CoinAPI.getCoins({ limit, offset });

  const { coins, stats }: Coins = data?.data || {};

  const handleClick = (page: string | number) => {
    if (page === "...") return;
    setCurrentPage(Number(page));
  };

  return (
    <>
      <h1>Best Coin Price Tracker on the Market</h1>
      {!isLoading && !error && <CoinsTable coins={coins} />}
      {!isLoading && !error && (
        <Pagination
          stats={stats}
          currentPage={currentPage}
          handleClick={handleClick}
        />
      )}
    </>
  );
}
