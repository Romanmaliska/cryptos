import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

import * as CoinAPI from "API/coinRankingApi";

import Hero from "components/hero/Hero";
import Portfolio from "components/portfolio/Portfolio";
import Button from "components/ui/button/Button";
import CoinsTableSkeleton from "features/coinsTable/CoinsTableSkeleton";

const CoinsTable = lazy(() => import("features/coinsTable/CoinsTable"));

import styles from "styles/utils.module.css";

export default function Home() {
  const { data } = CoinAPI.getCoins({});
  const { coins } = data?.data || {};

  return (
    <>
      <Hero />
      <Portfolio />
      <Suspense fallback={<CoinsTableSkeleton rows={10} />}>
        <CoinsTable coins={coins} />
      </Suspense>
      <Link className={styles.justify_align_center} to="/coins">
        <Button>See More</Button>
      </Link>
    </>
  );
}
