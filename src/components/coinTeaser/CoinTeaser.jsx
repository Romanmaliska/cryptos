import styles from "./CoinTeaser.module.css";
import useCryptoApi from "../../hooks/useCryptoAPI";

export default function CoinTeaser() {
  const { data, isLoading, isError: error } = useCryptoApi({ limit: 5 });
  const { coins } = data?.data || {};

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
                  width={32}
                  height={32}
                  alt={coin?.name}
                />
                {coin?.name}
              </td>
              <td>{coin?.symbol}</td>
              <td>{coin?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
