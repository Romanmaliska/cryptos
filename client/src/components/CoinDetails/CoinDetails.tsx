import CoinOverview from "components/coinOverview/CoinOverview";
import AreaChart from "components/fullChart/FullChart";

type Props = {
  data: {
    coin: {
      name: string;
      rank: number;
      symbol: string;
      iconUrl: string;
      price: string;
      change: string;
      sparkline: string[];
    };
  };
};

export default function CoinDetails({ data }: Props) {
  const { name, rank, symbol, iconUrl, price, change, sparkline } = data?.coin;
  return (
    <>
      <CoinOverview
        name={name}
        rank={rank}
        symbol={symbol}
        iconUrl={iconUrl}
        price={price}
        change={change}
      />
      <AreaChart sparkline={sparkline} />
    </>
  );
}
