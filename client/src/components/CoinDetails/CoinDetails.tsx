import Button from "components/ui/button/Button";
import CoinOverview from "components/coinOverview/CoinOverview";
import CoinStats from "components/coinStats/CoinStats";
import CoinChart from "features/coinChart/CoinChart";

import styles from "components/coinDetails/CoinDetails.module.css";

import { Coin } from "types/common";

type Props = {
  data: {
    coin: Coin;
  };
};

export default function CoinDetails({ data }: Props) {
  const { coin } = data;
  const { name } = coin;

  return (
    <main className={styles.coin_details}>
      <CoinOverview coin={coin} />
      <CoinChart coin={coin} />
      <Button className="btn_secondary">Buy {name}</Button>
      <CoinStats coin={coin} />
    </main>
  );
}
