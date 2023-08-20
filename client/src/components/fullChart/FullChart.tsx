import { YAxis, XAxis, AreaChart, Area, ResponsiveContainer } from "recharts";
import { getXAxisValues } from "../../utils/fullChartCalculations";

type Props = {
  sparkline: string[];
};

export default function FullChart({ sparkline }: Props) {
  const prices = sparkline.map((price) => ({
    value: Number(price).toFixed(2),
  }));

  const xAxisValues = getXAxisValues();

  console.log(getXAxisValues());

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={prices}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="white" stopOpacity={0.8} />
            <stop offset="95%" stopColor="white" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          ticks={[4, 8, 12, 16, 20]}
          tickFormatter={(_, index) => xAxisValues[index]}
        />
        <YAxis domain={["dataMin", "dataMax"]} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="yellow"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
