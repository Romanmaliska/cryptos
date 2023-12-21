import { YAxis, XAxis, AreaChart, Area, ResponsiveContainer } from "recharts";
import { useAppSelector } from "store/useAppDispatch";
import { selectCurrencyRates } from "slices/currencySlice";
import { getXAxisValues } from "features/coinChart/XAxisCalculation";
import { getYAxisValues } from "features/coinChart/YAxisCalculation";
import { parseCurrency } from "utils/parseCurrency";

type Props = {
  sparkline: string[];
};

export default function CoinChart({ sparkline }: Props) {
  const prices = sparkline.map((price) => ({
    price: Number(price).toFixed(),
  }));


  //TODO: fix this
  const currencyState = useAppSelector(selectCurrencyRates);
  const parsedCurrency = parseCurrency({ price: "1000", currencyState });
  console.log(parsedCurrency);

  const YAxisValues = getYAxisValues(sparkline);
  const XAxisValues = getXAxisValues();

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={prices} margin={{ left: 100 }}>
        <XAxis
          ticks={[0, 5, 10, 15, 20]}
          tickFormatter={(_, index) => XAxisValues[index]}
        />
        <YAxis
          domain={["dataMin", "dataMax"]}
          ticks={[250000, 26000, 30000]}
          tickFormatter={(_, index) => YAxisValues[index]}
        />
        <Area
          type="monotone"
          dataKey="price"
          stroke="yellow"
          fillOpacity={1}
          fill="black"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
