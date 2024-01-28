export type Coin = {
  "24hVolume": string;
  allTimeHigh: { price: string };
  btcPrice: string;
  change: string;
  description: string;
  iconUrl: string;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: string[];
  symbol: string;
  uuid: string;
  websiteUrl: string;
};

export type Stats = {
  total: number;
  total24hVolume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
};

export type Coins = {
  coins: Coin[];
  stats: Stats;
};

export type CurrencyRates = {
  success?: boolean;
  timestamp?: number;
  source?: "USD";
  quotes?: { USDCNY: number; USDCZK: number; USDEUR: number };
};

export type CurrencyState = {
  currentCurrency: "EUR" | "USD" | "CNY" | "CZK";
  currencyRates: CurrencyRates;
  status: "idle" | "loading" | "failed";
  error: string | null;
};
