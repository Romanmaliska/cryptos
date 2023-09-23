import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Manage Your Crypto and DeFi Portfolio From One Place</h1>
      <p>Securely connect the portfolio you’re using to start.</p>
      <section className={styles.linkButton_wrapper}>
        <button>See More</button>
      </section>
    </section>
  );
}
