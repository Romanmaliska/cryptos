import { useAppSelector } from "store/useAppDispatch";
import { selectCurrencyRates } from "slices/currencySlice";

import { parseCurrency } from "utils/parseCurrency";

import { Stats } from "types/common";
import styles from "components/marketStats/MarketStats.module.css";

type Props = {
  stats: Stats;
};

export default function MarketStats({ stats }: Props) {
  const currencyState = useAppSelector(selectCurrencyRates);

  const vulumeInSetCurrency = parseCurrency({
    price: stats.total24hVolume,
    currencyState,
  });
  const marketInSetCurrency = parseCurrency({
    price: stats.totalMarketCap,
    currencyState,
  });

  const labels = ["Volume 24h", "Market Cap"];

  return (
    <section className={styles.market_stats}>
      {labels.map((label) => {
        return (
          <div key={label}>
            <p>{label}</p>
            <h2>
              {label === "Volume 24h"
                ? vulumeInSetCurrency
                : marketInSetCurrency}
            </h2>
          </div>
        );
      })}
    </section>
  );
}
