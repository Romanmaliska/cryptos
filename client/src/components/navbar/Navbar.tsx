import { useState } from "react";

import styles from "components/navbar/Navbar.module.css";

import NavigationMenu from "components/navbar/NavigationMenu";
import Logo from "components/ui/logo/Logo";
import CurrencyOptions from "features/currencyOptions/CurrencyOptions";
import Auth from "features/userAuth/UserAuth";

export default function Navbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <nav>
        <NavigationMenu
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
        <Logo />
        <CurrencyOptions />
        <Auth />
      </nav>
    </header>
  );
}
