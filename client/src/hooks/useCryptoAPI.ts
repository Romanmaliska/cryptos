import useSWR from "swr";

const fetcher = (url: string, options: {}) =>
  fetch(url, options).then((res) => res.json());

export default function useCryptoApi({ limit }: { limit: number }) {
  const BASE_URL = `https://api.coinranking.com/v2/coins?limit=${limit}&timePeriod=7d`;
  const API_KEY = "coinranking04fbc7a255cbf6dec22245f3268f58481d40c3e84d2696a3";

  const { data, error, isLoading } = useSWR(
    BASE_URL,
    (url) =>
      fetcher(url, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": API_KEY,
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
