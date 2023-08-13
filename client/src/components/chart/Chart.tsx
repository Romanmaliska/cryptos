import { LineChart, Line, YAxis } from "recharts";

type Props = {
  sparkline: string[];
};

export default function Chart({ sparkline }: Props) {
  const prices = sparkline.filter(Boolean).map((price) => ({ value: price }));

  return (
    <LineChart data={prices} width={60} height={20}>
      <YAxis hide={true} domain={["dataMin", "dataMax"]} />
      <Line type="linear" dataKey="value" stroke="#82ca9d" dot={false} />
    </LineChart>
  );
}
