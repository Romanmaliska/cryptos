import * as CoinAPI from "API/coinRankingApi";
import Hero from "components/hero/Hero";
import Portfolio from "components/portfolio/Portfolio";
import Button from "components/ui/button/Button";
import CoinsTable from "features/coinsTable/CoinsTable";
import { Link } from "react-router-dom";

export default function Home() {
  const { data } = CoinAPI.getCoins({});
  const { coins } = data?.data || {};

  return (
    <>
      <Hero />
      <Portfolio />
      <CoinsTable coins={coins} />
      <Link to="/coins">
        <Button>See More</Button>
      </Link>
    </>
  );
}
