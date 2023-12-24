import CoinOverview from "components/coinOverview/CoinOverview";
import CoinChart from "features/coinChart/CoinChart";

import styles from "components/coinDetails/CoinDetails.module.css";

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
    <main className={styles.coin_details}>
      <CoinOverview
        name={name}
        rank={rank}
        symbol={symbol}
        iconUrl={iconUrl}
        price={price}
        change={change}
      />
      <CoinChart sparkline={sparkline} />
    </main>
  );
}
