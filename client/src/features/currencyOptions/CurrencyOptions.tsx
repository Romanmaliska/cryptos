import { IoSettingsOutline } from "react-icons/io5";
import { Popover } from "@headlessui/react";

import { fetchCurrencyRates } from "slices/currencySlice";
import { useAppDispatch } from "store/useAppDispatch";

import { CurrencyState } from "types/common";

import styles from "features/currencyOptions/CurrencyOptions.module.css";

export default function NavbarCurrencyOptions() {
  const dispatch = useAppDispatch();

  const currencies: CurrencyState["currentCurrency"][] = [
    "USD",
    "EUR",
    "CZK",
    "CNY",
  ];

  return (
    <>
      <Popover>
        <Popover.Button>
          <IoSettingsOutline size="24px" color="white" />
        </Popover.Button>
        <Popover.Panel className={styles.currency_panel}>
          {currencies.map((currency) => (
            <Popover.Button key={currency}>
              <div
                onClick={() => {
                  dispatch(fetchCurrencyRates(currency));
                }}
              >
                <img
                  src={`/currency/${currency}.svg`}
                  alt={currency}
                  width={30}
                  height={30}
                />
                <p>{currency}</p>
              </div>
            </Popover.Button>
          ))}
        </Popover.Panel>
      </Popover>
    </>
  );
}
