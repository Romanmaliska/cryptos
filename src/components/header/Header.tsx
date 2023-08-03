import { useState } from "react";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <i
          className={styles.menuButton}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          {isNavbarOpen ? <CgClose /> : <CgMenuGridO />}
        </i>
        <Link to="/">Cryptos</Link>
        <i className={styles.userButton}>
          <BiUserCircle />
        </i>
      </header>
      <Navbar
        isNavbarOpen={isNavbarOpen}
        setIsNavbarOpen={(isNavbarOpen) => setIsNavbarOpen(isNavbarOpen)}
      />
    </>
  );
}
