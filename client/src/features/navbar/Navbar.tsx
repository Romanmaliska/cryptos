import NavbarCurrencyOptions from "features/Navbar/NavbarCurrencyOptions";
import styles from "features/navbar/Navbar.module.css";
import NavbarLogo from "features/navbar/NavbarLogo";
import NavbarNavlinksDialog from "features/navbar/NavbarNavlinksDialog";
import NavbarNavlinksIcon from "features/navbar/NavbarNavlinksIcon";
import { useState } from "react";

export default function Navbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
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
    </>
  );
}
