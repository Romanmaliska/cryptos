import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const exchanges = [
    {
      name: "Binance",
      link: "https://www.binance.com",
    },
    {
      name: "MetaMask",
      link: "https://metamask.io/",
    },
    {
      name: "CoinBase",
      link: "https://www.coinbase.com/",
    },
  ];

  return (
    <section className={styles.portfolio}>
      {exchanges.map(({ name, link }) => (
        <a href={link} key={name} target="_blank" rel="noreferrer">
          <img
            src={`./homepage/${name}.png`}
            alt={name}
            width={80}
            height={80}
          />
          <p>{name}</p>
          <p>
            Connect <span>&#10230;</span>
          </p>
        </a>
      ))}
    </section>
  );
}
