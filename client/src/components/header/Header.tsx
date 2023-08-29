import { useState } from "react";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchCurrencyRates } from "../../reducers/currencySlice";
import { CurrencyState } from "../../types/common";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const handlePopupClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const currencies: CurrencyState["currentCurrency"][] = [
    "USD",
    "EUR",
    "CZK",
    "CNY",
  ];
  const dispatch = useAppDispatch();

  return (
    <>
      <header className={styles.header}>
        <i
          className={styles.menuButton}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          {isNavbarOpen ? <CgClose /> : <CgMenuGridO />}
        </i>
        <Link to="/">
          <img src="/logo.png" alt="logo" width={120} height={32} />
        </Link>
        <i className={styles.userButton}>
          <BiUserCircle onClick={handlePopupClick} />
        </i>
        <Popup
          className={styles.popup}
          open={open}
          anchor={anchor}
          placement={"bottom-end"}
        >
          {currencies.map((currency) => (
            <button
              key={currency}
              onClick={() => dispatch(fetchCurrencyRates(currency))}
            >
              {currency}
            </button>
          ))}
        </Popup>
      </header>
      <Navbar
        isNavbarOpen={isNavbarOpen}
        setIsNavbarOpen={(isNavbarOpen) => setIsNavbarOpen(isNavbarOpen)}
      />
    </>
  );
}
