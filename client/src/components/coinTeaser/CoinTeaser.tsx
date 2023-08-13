import styles from "./CoinTeaser.module.css";
import utilStyles from "../../styles/utils.module.css";
import useCryptoApi from "../../hooks/useCryptoAPI";
import { parseCurency } from "../../utils/parseCurrency";
import PercentageChange from "../../percentChange/PercentChange";

type Coin = {
  change: string;
  iconUrl: string;
  name: string;
  price: string;
  rank: number;
  sparkline: string[];
};

type Coins = {
  coins: Coin[];
};

export default function CoinTeaser() {
  const { data, isLoading, isError: error } = useCryptoApi({ limit: 5 });
  const { coins }: Coins = data?.data || {};

  return (
    <section className={styles.wrapper}>

      {isLoading && <p>Loading...</p>}

      {error && <p>Something went wrong...</p>}

      <table>
        <tbody>
          {coins?.map((coin) => (
            <tr key={coin?.rank}>
              <td>
                <a href="">{coin?.rank}</a>
              </td>
              <td>
                <a href="" className={utilStyles.flex_center}>
                  <img
                    src={coin?.iconUrl}
                    width={22}
                    height={22}
                    alt={coin?.name}
                  />
                  {coin?.name}
                </a>
              </td>
              <td>
                <a href="">{parseCurency(coin?.price)}</a>
              </td>
              <td>
                <a href="">
                  <PercentageChange change={coin?.change} />
                </a>
              </td>
              {/* <td className={styles.chart}>
                <Chart sparkline={coin?.sparkline} />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
