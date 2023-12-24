import CoinsTableRows from "features/coinsTable/CoinsTableRows";

import { Coin } from "types/common";

import styles from "features/coinsTable/CoinsTable.module.css";

type Props = {
  coins: Coin[];
};

export default function CoinsTable({ coins }: Props) {
  return (
    <>
      <section className={styles.table_container}>
        <table>
          <tbody>
            <CoinsTableRows coins={coins} />
          </tbody>
        </table>
      </section>
    </>
  );
}
