import { NavLink } from "react-router-dom";
import { CgClose, CgMenuGridO } from "react-icons/cg";

import styles from "components/navbar/Navbar.module.css";

import Dialog from "components/ui/dialog/Dialog";

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
};

export default function NavigationMenu({
  isDialogOpen,
  setIsDialogOpen,
}: Props) {
  const navlinks = ["Coins", "News"];

  return (
    <>
      {isDialogOpen ? (
        <CgClose size="24px" onClick={() => setIsDialogOpen(false)} />
      ) : (
        <CgMenuGridO size="24px" onClick={() => setIsDialogOpen(true)} />
      )}
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
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
    </>
  );
}
