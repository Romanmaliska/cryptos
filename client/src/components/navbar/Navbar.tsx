import styles from "components/navbar/Navbar.module.css";

import NavigationMenu from "components/navbar/NavigationMenu";
import Logo from "components/ui/logo/Logo";
import CurrencyOptions from "features/currencyOptions/CurrencyOptions";
import Auth from "features/userAuth/UserAuth";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav>
        <NavigationMenu />
        <Logo />
        <CurrencyOptions />
        <Auth />
      </nav>
    </header>
  );
}
