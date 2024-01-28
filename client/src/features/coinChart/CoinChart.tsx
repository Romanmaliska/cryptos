import { YAxis, XAxis, AreaChart, Area, ResponsiveContainer } from "recharts";
import { useAppSelector } from "store/useAppDispatch";
import { selectCurrencyRates } from "slices/currencySlice";
import { getXAxisValues } from "features/coinChart/XAxisCalculation";
import { getYAxisValues } from "features/coinChart/YAxisCalculation";
import { parseCurrency } from "utils/parseCurrency";

import { Coin } from "types/common";

type Props = {
  coin: Coin;
};

export default function CoinChart({ coin }: Props) {
  const { sparkline } = coin;
  const currencyState = useAppSelector(selectCurrencyRates);

  const prices = sparkline.map((value, i, arr) => {
    if (value === null) {
      const price = arr[i - 1];
      return {
        name: parseCurrency({ price, currencyState }),
        price: Number(price).toFixed(2),
        hour: i,
      };
    }

    const price = value;
    return {
      name: parseCurrency({ price, currencyState }),
      price: Number(price).toFixed(2),
      hour: i,
    };
  });

  const XAxisValues = getXAxisValues();

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={prices}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="50%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis
          type="number"
          dataKey="price"
          domain={["dataMin", "dataMax"]}
          name="name"
          tickCount={8}
        />
        <XAxis />
        <Area
          type="natural"
          dataKey="price"
          stroke="orange"
          fillOpacity={0.5}
          fill="url(#color)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
