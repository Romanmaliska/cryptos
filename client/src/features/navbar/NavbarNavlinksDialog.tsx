import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Dialog from "components/ui/dialog/Dialog";

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
};

export default function NavbarNavlinksDialog({
  isDialogOpen,
  setIsDialogOpen,
}: Props) {
  const navlinks = ["Home", "Coins", "News", "Login", "Register"];

  return (
    <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
      {navlinks.map((navlink) => (
        <NavLink
          key={navlink}
          to={navlink.toLowerCase()}
          className={styles.navlink}
          onClick={() => setIsDialogOpen(false)}
        >
          {navlink}
        </NavLink>
      ))}
    </Dialog>
  );
}
