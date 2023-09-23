import { useRef, useLayoutEffect } from "react";
import styles from "./Dialog.module.css";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Dialog({ open, onClose, children }: Props) {
  const ref = useRef<HTMLDialogElement | null>(null);
  const dialogRef = ref.current;

  useLayoutEffect(() => {
    const closeListener = () => onClose && onClose();
    dialogRef?.addEventListener("close", closeListener);

    return () => {
      dialogRef?.removeEventListener("close", closeListener);
    };
  }, [onClose]);

  useLayoutEffect(() => {
    if (open && !dialogRef?.open) dialogRef?.showModal();
    else if (!open && dialogRef?.open) dialogRef?.close();
  }, [open]);

  return (
    <dialog
      className={styles.dialog}
      ref={ref}
      onClick={(e) => {
        const dialogDimensions = e.currentTarget.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions?.left ||
          e.clientX > dialogDimensions?.right ||
          e.clientY < dialogDimensions?.top ||
          e.clientY > dialogDimensions?.bottom
        ) {
          e.currentTarget.close();
        }
      }}
    >
      {children}
    </dialog>
  );
}
