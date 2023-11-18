import { ReactNode } from "react";
import styles from "./button.module.css";

type Props = {
  children: ReactNode;
  onClick?: (e: any) => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button className={styles.btn_primary} onClick={onClick}>
      {children}
    </button>
  );
}
