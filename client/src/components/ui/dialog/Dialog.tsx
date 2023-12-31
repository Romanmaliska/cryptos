import { useRef, useLayoutEffect } from "react";

import styles from "components/ui/dialog/Dialog.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Dialog({ isOpen, onClose, children }: Props) {
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
    if (isOpen) dialogRef?.showModal();
    else if (!isOpen) dialogRef?.close();
  }, [isOpen]);

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
