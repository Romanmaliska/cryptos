import styles from "./CoinsTable.module.css";
import utilStyles from "../../styles/utils.module.css";
import { Link } from "react-router-dom";
import { parseCurrency } from "../../utils/parseCurrency";
import SimpleLineChart from "../simpleLineChart/SimpleLineChart";
import PercentageChange from "../percentageChange/PercentageChange";
import { Coin } from "../../types/common";
import { useAppSelector } from "../../hooks/useAppDispatch";
import { selectCurrencyRates } from "../../reducers/currencySlice";

type Props = {
  coins: Coin[];
};

export default function CoinsTable({ coins }: Props) {
  const currencyState = useAppSelector(selectCurrencyRates);

  return (
    <>
      <section className={styles.table_container}>
        <table>
          <tbody>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Price Graph (7D)</th>
            </tr>
            {coins?.map((coin) => (
              <tr key={coin?.rank}>
                <td>
                  <Link to={`../coins/${coin?.uuid}`}>{coin?.rank}</Link>
                </td>
                <td>
                  <Link
                    to={`../coins/${coin?.uuid}`}
                    className={utilStyles.flex_center}
                  >
                    <img
                      src={coin?.iconUrl}
                      width={22}
                      height={22}
                      alt={coin?.name}
                    />
                    <span>{coin?.name}</span>
                    <span className={styles.symbol}>{coin?.symbol}</span>
                  </Link>
                </td>
                <td>
                  <Link to={`../coins/${coin?.uuid}`}>
                    {parseCurrency({ price: coin?.price, currencyState })}
                  </Link>
                </td>
                <td>
                  <Link to={`../coins/${coin?.uuid}`}>
                    <PercentageChange change={coin?.change} />
                  </Link>
                </td>
                <td className={styles.lineChart}>
                  <Link to={`../coins/${coin?.uuid}`}>
                    <SimpleLineChart
                      sparkline={coin?.sparkline}
                      change={coin?.change}
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className={styles.linkButton_wrapper}>
        <button>See More</button>
      </section>
    </>
  );
}
