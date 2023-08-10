import styles from "./CoinTeaser.module.css";
import useCryptoApi from "../../hooks/useCryptoAPI";
import { parseCurency } from "../../utils/parseCurrency";

type Coin = {
  rank: number;
  name: string;
  iconUrl: string;
  price: string;
};

type Coins = {
  coins: Coin[];
};

export default function CoinTeaser() {
  const { data, isLoading, isError: error } = useCryptoApi({ limit: 5 });
  const { coins }: Coins = data?.data || {};

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}

      <table className={styles.table}>
        <tbody>
          {coins?.map((coin) => (
            <tr key={coin?.rank}>
              <td>{coin?.rank}</td>
              <td>
                <img
                  src={coin?.iconUrl}
                  width={22}
                  height={22}
                  alt={coin?.name}
                />
                {coin?.name}
              </td>
              <td>{parseCurency(coin?.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
