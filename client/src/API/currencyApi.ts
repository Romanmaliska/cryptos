export async function getCurrencyRates() {
  const URL = `http://apilayer.net/api/live?access_key=${
    import.meta.env.VITE_CURRENCYLAYER_API_KEY
  }&source=USD&currencies=EUR,CNY,CZK`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
