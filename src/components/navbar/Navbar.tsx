import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

type Props = {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (isNavbarOpen: boolean) => void;
};

export default function Navbar({ isNavbarOpen, setIsNavbarOpen }: Props) {
  return (
    isNavbarOpen && (
      <aside>
        <nav className={styles.navbar}>
          <Link to="coins" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
            Coins
          </Link>
          <Link to="news" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
            News
          </Link>
        </nav>
      </aside>
    )
  );
}
