import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const exchanges = ["Binance", "MetaMask", "CoinBase"];

  return (
    <section className={styles.portfolio}>
      {exchanges.map((exchange) => (
        <article>
          <img
            src={`./homepage/${exchange}.png`}
            alt={exchange}
            width={88}
            height={88}
          />
          <p>{exchange}</p>
          <p>Connect <span>&#10230;</span></p>
        </article>
      ))}
    </section>
  );
}
