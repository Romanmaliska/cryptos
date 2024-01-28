import { useAppSelector } from "store/useAppDispatch";
import { selectCurrencyRates } from "slices/currencySlice";
import { parseCurrency } from "utils/parseCurrency";
import PercentageChange from "components/ui/percentagesChange/PercentageChange";

import { Coin } from "types/common";

import styles from "components/coinOverview/CoinOverview.module.css";

type Props = {
  coin: Coin; 
};

export default function CoinOverview({ coin }: Props) {
  const { rank, name, symbol, iconUrl, price, change } = coin;
  const currencyState = useAppSelector(selectCurrencyRates);

  return (
    <section className={styles.overview}>
      <span className={styles.rank}>rank #{rank}</span>
      <article className={styles.detailsWrapper}>
        <img src={iconUrl} alt={`${name} icon`} width={40} height={40} />
        <h1>{name} Price</h1>
        <h3>{symbol}</h3>
      </article>
      <article className={styles.detailsWrapper}>
        <h2>{parseCurrency({ price, currencyState })}</h2>
        <PercentageChange change={change} />
      </article>
    </section>
  );
}
