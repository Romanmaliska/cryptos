import styles from "./CoinOverview.module.css";
import { useAppSelector } from "../../store/useAppDispatch";
import { selectCurrencyRates } from "../../store/currencySlice";
import { parseCurrency } from "../../utils/parseCurrency";
import PercentageChange from "../ui/percentagesChange/PercentageChange";

type Props = {
  name: string;
  rank: number;
  symbol: string;
  iconUrl: string;
  price: string;
  change: string;
};

export default function CoinOverview({
  rank,
  name,
  symbol,
  iconUrl,
  price,
  change,
}: Props) {

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
        <h2>{parseCurrency({price, currencyState})}</h2>
        <PercentageChange change={change} />
      </article>
    </section>
  );
}
