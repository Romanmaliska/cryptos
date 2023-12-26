import styles from "./CoinsTable.module.css";

type Props = {
  rows: 10 | 100;
};

export default function CoinsTableSkeleton({ rows }: Props) {
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
            {Array.from({ length: rows }).map((_, i) => (
              <tr key={i}>
                <td className={styles.table_skeleton}></td>
                <td className={styles.table_skeleton}></td>
                <td className={styles.table_skeleton}></td>
                <td className={styles.table_skeleton}></td>
                <td className={styles.table_skeleton}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
