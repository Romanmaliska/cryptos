import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

import Dialog from "components/ui/dialog/Dialog";

import { fetchCurrencyRates } from "slices/currencySlice";
import { useAppDispatch } from "store/useAppDispatch";

import { CurrencyState } from "types/common";

import styles from "features/currencyOptions/CurrencyOptions.module.css";

export default function NavbarCurrencyOptions() {
  const dispatch = useAppDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const currencies: CurrencyState["currentCurrency"][] = [
    "USD",
    "EUR",
    "CZK",
    "CNY",
  ];

  return (
    <>
      <IoSettingsOutline
        size="24px"
        onClick={() => setIsDialogOpen(!isDialogOpen)}
      />
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(!isDialogOpen)}
      >
        {currencies.map((currency) => (
          <span
            className={styles.currency}
            key={currency}
            onClick={() => {
              setIsDialogOpen(false);
              dispatch(fetchCurrencyRates(currency));
            }}
          >
            <img
              src={`../currency/${currency}.svg`}
              alt={currency}
              width={30}
              height={30}
            />
            <p>{currency}</p>
          </span>
        ))}
      </Dialog>
    </>
  );
}
