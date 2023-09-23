import { CgClose, CgMenuGridO } from "react-icons/cg";

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
};

export default function NavbarNavlinksIcon({
  isDialogOpen,
  setIsDialogOpen,
}: Props) {
  return (
    <>
      {isDialogOpen ? (
        <CgClose size="24px" onClick={() => setIsDialogOpen(false)} />
      ) : (
        <CgMenuGridO size="24px" onClick={() => setIsDialogOpen(true)} />
      )}
    </>
  );
}
