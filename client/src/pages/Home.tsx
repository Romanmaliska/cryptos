import * as CoinAPI from "../API/coinRankingApi";
import CoinsTable from "../components/coinsTable/CoinsTable";
import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import { Coins } from "../types/common";

export default function Home() {
  const {
    data,
    isLoading,
    isError: error,
  } = CoinAPI.getCoins({});


  const { coins}: Coins = data?.data || {};

  return (
    <>
      <Hero />
      <Portfolio />
      {!isLoading && !error && <CoinsTable coins={coins} />}
    </>
  );
}
