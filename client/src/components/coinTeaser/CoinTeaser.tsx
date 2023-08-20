import styles from "./CoinTeaser.module.css";
import utilStyles from "../../styles/utils.module.css";
import { Link } from "react-router-dom";
import { parseCurrency } from "../../utils/parseCurrency";
import SimpleLineChart from "../simpleLineChart/SimpleLineChart";
import PercentageChange from "../percentChange/PercentChange";
import * as CoinAPI from "../../API/coinRankingApi";

type Coin = {
  change: string;
  iconUrl: string;
  name: string;
  price: string;
  rank: number;
  sparkline: string[];
  uuid: string;
};

type Coins = {
  coins: Coin[];
};

export default function CoinTeaser() {
  const { data, isLoading, isError: error } = CoinAPI.getCoins({});
  const { coins }: Coins = data?.data || {};

  return (
    <>
      <section className={styles.table}>
        {isLoading && <p>Loading...</p>}

        {error && <p>Something went wrong...</p>}

        <table>
          <tbody>
            {coins?.map((coin) => (
              <tr key={coin?.rank}>
                <td>
                  <Link to={`coins/${coin?.uuid}`}>{coin?.rank}</Link>
                </td>
                <td>
                  <Link
                    to={`coins/${coin?.uuid}`}
                    className={utilStyles.flex_center}
                  >
                    <img
                      src={coin?.iconUrl}
                      width={22}
                      height={22}
                      alt={coin?.name}
                    />
                    {coin?.name}
                  </Link>
                </td>
                <td>
                  <Link to={`coins/${coin?.uuid}`}>
                    {parseCurrency(coin?.price)}
                  </Link>
                </td>
                <td>
                  <Link to={`coins/${coin?.uuid}`}>
                    <PercentageChange change={coin?.change} />
                  </Link>
                </td>
                <td className={styles.chart}>
                  <SimpleLineChart sparkline={coin?.sparkline} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className={styles.link}>
        <button>See More</button>
      </section>
    </>
  );
}
