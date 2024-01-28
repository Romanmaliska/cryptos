import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

import { getCoin } from "API/coinRankingApi";

const CoinDetails = lazy(() => import("components/coinDetails/CoinDetails"));

export default function Coin() {
  const { uuid } = useParams<{ uuid: string }>();

  if (!uuid) return null;

  const { data } = getCoin({ uuid, timePeriod: "24h" });

  if (!data) return null;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CoinDetails data={data.data} />;
    </Suspense>
  );
}
