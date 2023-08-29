import useSWR from "swr";

const fetcher = (url: string, options: {}) =>
  fetch(url, options).then((res) => res.json());

export function getCoins({
  limit = 10,
  timePeriod = "7d",
  offset = 0,
}: {
  limit?: 10 | 100;
  timePeriod?:
    | "1h"
    | "3h"
    | "12h"
    | "24h"
    | "7d"
    | "30d"
    | "3m"
    | "1y"
    | "3y"
    | "5y";
  offset?: number;
}) {
  const BASE_URL = `https://api.coinranking.com/v2/coins?limit=${limit}&timePeriod=${timePeriod}&offset=${offset}`;

  const { data, error, isLoading } = useSWR(
    BASE_URL,
    (url) =>
      fetcher(url, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": import.meta.env.VITE_COINRANKING_API_KEY,
        },
      }),
    {
      // refreshInterval: 3000,
    }
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}

export function getCoin({
  uuid,
  timePeriod = "7d",
}: {
  uuid: string;
  timePeriod?: "24h" | "7d" | "30d" | "3m" | "1y";
}) {
  const BASE_URL = `https://api.coinranking.com/v2/coin/${uuid}?timePeriod=${timePeriod}`;

  const { data, error, isLoading } = useSWR(
    BASE_URL,
    (url) =>
      fetcher(url, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": import.meta.env.VITE_COINRANKING_API_KEY,
        },
      }),
    {
      // refreshInterval: 3000,
    }
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
