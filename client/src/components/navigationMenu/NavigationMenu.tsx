import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgClose, CgMenuGridO } from "react-icons/cg";

import Dialog from "components/ui/dialog/Dialog";

export default function NavigationMenu() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
            onClick={() => setIsDialogOpen(false)}
          >
            {navlink}
          </NavLink>
        ))}
      </Dialog>
    </>
  );
}
