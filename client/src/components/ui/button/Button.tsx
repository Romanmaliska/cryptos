import { ReactNode } from "react";

import styles from "components/ui/button/Button.module.css";

type Props = {
  children: ReactNode;
  onClick?: (e: any) => void;
  className?: "btn_primary" | "btn_secondary";
};

export default function Button({
  children,
  onClick,
  className = "btn_primary",
}: Props) {
  return (
    <button className={`${styles.btn} ${styles[className]}`} onClick={onClick}>
      {children}
    </button>
  );
}
