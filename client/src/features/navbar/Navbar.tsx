import { useState } from "react";
import styles from "features/navbar/Navbar.module.css";
import NavbarCurrencyOptions from "features/Navbar/NavbarCurrencyOptions";
import NavbarLogo from "features/navbar/NavbarLogo";
import NavbarNavlinksDialog from "features/navbar/NavbarNavlinksDialog";
import NavbarNavlinksIcon from "features/navbar/NavbarNavlinksIcon";

export default function Navbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <NavbarNavlinksIcon
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
        <NavbarNavlinksDialog
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
        <NavbarLogo />
        <NavbarCurrencyOptions />
      </nav>
    </header>
  );
}
