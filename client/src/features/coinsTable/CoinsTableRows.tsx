import { Link } from "react-router-dom";

import { useAppSelector } from "store/useAppDispatch";
import { selectCurrencyRates } from "slices/currencySlice";

import { Coin } from "types/common";

import { parseCurrency } from "utils/parseCurrency";
import PercentageChange from "components/ui/percentagesChange/PercentageChange";
import SimpleLineChart from "features/coinsTable/SimpleLineChart";

import utilStyles from "styles/utils.module.css";
import styles from "features/coinsTable/CoinsTable.module.css";

type Props = {
  coins: Coin[];
};

export default function CoinTableRows({ coins }: Props) {
  
  const currencyState = useAppSelector(selectCurrencyRates);

  return (
    <>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Price</th>
        <th>24h Change</th>
        <th>Price Graph (7D)</th>
      </tr>
      {coins?.map(({ rank, uuid, iconUrl, name, sparkline, change, price, symbol}) => (
        <tr key={rank}>
          <td>
            <Link to={`../coins/${uuid}`}>{rank}</Link>
          </td>
          <td>
            <Link to={`../coins/${uuid}`} className={utilStyles.alignCenter}>
              <img src={iconUrl} width={22} height={22} alt={name} />
              <span>{name}</span>
              <span className={styles.symbol}>{symbol}</span>
            </Link>
          </td>
          <td>
            <Link to={`../coins/${uuid}`}>
              {parseCurrency({ price, currencyState })}
            </Link>
          </td>
          <td>
            <Link to={`../coins/${uuid}`}>
              <PercentageChange change={change} />
            </Link>
          </td>
          <td className={styles.lineChart}>
            <Link to={`../coins/${uuid}`}>
              <SimpleLineChart sparkline={sparkline} change={change} />
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
}
