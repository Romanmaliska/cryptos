import { CurrencyState } from "./../types/common";

type Params = {
  price: string;
  currencyState: CurrencyState;
};

type currencyLocale = {
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
  const currencyLocale: currencyLocale = {
    CNY: "zh-CN",
    CZK: "cs-CZ",
    USD: "en-US",
    EUR: "de-DE",
  };
  const parsedPrice = Number(price);
  const currentCurrency = currencyState.currentCurrency;
  const locale = currencyLocale[currentCurrency];
  const priceInCurrency = calculateCoinPrice(parsedPrice, currencyState);
  const formatOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency: currentCurrency,
  };

  return new Intl.NumberFormat(locale, formatOptions).format(priceInCurrency);
};
