import { LineChart, Line, YAxis } from "recharts";

type Props = {
  change: string;
  sparkline: string[];
};

export default function SimpleLineChart({ change, sparkline }: Props) {
  const prices = sparkline.filter(Boolean).map((price) => ({ value: price }));

  const changeAsNumber = Number(change);
  const strokeColor = changeAsNumber < 0 ? "#ff4d4d" : "#6ccf59";

  return (
    <LineChart data={prices} width={60} height={20}>
      <YAxis hide={true} domain={["dataMin", "dataMax"]} />
      <Line type="linear" dataKey="value" stroke={strokeColor} dot={false} />
    </LineChart>
  );
}
