import { CurrencyState } from "./../types/common";

type Params = {
  price: string;
  currencyState: CurrencyState;
};

type CurrenciesToBeCalculated = {
  EUR: "de-DE";
  CNY: "zh-CN";
  USD: "en-US";
  CZK: "cs-CZ";
};

const calculateCoinPrice = (
  price: number,
  currencyState: CurrencyState
) => {
  const currentCurrency = currencyState.currentCurrency;
  if (currentCurrency === "USD") return price;
  const currencyRate = currencyState?.currencyRates?.quotes?.[`USD${currentCurrency}`];
  return price * currencyRate!;
};

export const parseCurrency = ({ price, currencyState }: Params): string => {
  const currenciesToBeCalculated: CurrenciesToBeCalculated = {
    CNY: "zh-CN",
    CZK: "cs-CZ",
    USD: "en-US",
    EUR: "de-DE",
  };
  const parsedPrice = Number(price);
  const currentCurrency = currencyState.currentCurrency;
  const locale = currenciesToBeCalculated[currentCurrency];
  const priceInCurrency = calculateCoinPrice(parsedPrice, currencyState);
  const formatOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency: currentCurrency,
  };

  return new Intl.NumberFormat(locale, formatOptions).format(priceInCurrency);
};
