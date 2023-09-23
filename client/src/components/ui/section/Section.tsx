import styles from "styles/utils.module.css";
type Props = {
  children: React.ReactNode;
};

export default function Section({ children }: Props) {
  return <section className={styles.justifyAlignCenter}>{children}</section>;
}
