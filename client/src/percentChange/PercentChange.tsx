import styleUtils from "../styles/utils.module.css";
import { TbTriangleInvertedFilled, TbTriangleFilled } from "react-icons/tb";

type Props = {
  change: string;
};

export default function PercentageChange({ change }: Props) {
  const color = change?.includes("-") ? styleUtils.red : styleUtils.green;

  return (
    <article className={`${color} ${styleUtils.flex_center}`}>
      {change?.includes("-") ? (
        <TbTriangleFilled />
      ) : (
        <TbTriangleInvertedFilled />
      )}
      {change}
    </article>
  );
}
