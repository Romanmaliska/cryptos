import styles from "components/footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Build with
        <img src="./coinranking/logo.svg" width={10} height={10} /> Coinranking
        API
      </p>
    </footer>
  );
}
