import { ReactNode } from "react";
import styles from "IconButton.module.css";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export default function IconButton({ children, onClick }: Props) {
  return (
    <button className={styles.btn_primary} onClick={onClick}>
      {children}
    </button>
  );
}
