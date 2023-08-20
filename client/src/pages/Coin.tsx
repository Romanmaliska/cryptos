import { useParams } from "react-router-dom";
import { getCoin } from "../API/coinRankingApi";
import CoinDetails from "../components/CoinDetails/CoinDetails";

export default function Coin() {
  const { uuid } = useParams<{ uuid: string }>();

  if (!uuid) return null;

  const { data, isLoading, isError } = getCoin({ uuid, timePeriod: "24h" });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong...</p>;

  return (
    <div>
      <CoinDetails data={data.data} />
    </div>
  );
}
