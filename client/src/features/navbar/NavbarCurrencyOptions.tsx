import Dialog from "components/ui/dialog/Dialog";
import styles from "features/navbar/Navbar.module.css";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { fetchCurrencyRates } from "../../store/currencySlice";
import { useAppDispatch } from "../../store/useAppDispatch";
import { CurrencyState } from "../../types/common";

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
      <BiUserCircle size="24px" onClick={() => setIsDialogOpen(!isDialogOpen)} />
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(!isDialogOpen)}>
        {currencies.map((currency) => (
          <span
            className={styles.currency_wrapper}
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
