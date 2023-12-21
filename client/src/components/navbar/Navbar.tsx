import NavigationMenu from "components/navigationMenu/NavigationMenu";
import Logo from "components/ui/logo/Logo";
import CurrencyOptions from "features/currencyOptions/CurrencyOptions";
import Auth from "features/userAuth/UserAuth";

import styles from "components/navbar/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <section>
          <NavigationMenu />
          <Logo />
        </section>
        <section>
          <CurrencyOptions />
          <Auth />
        </section>
      </nav>
    </header>
  );
}
