import styleUtils from "../../styles/utils.module.css";
import { TbTriangleInvertedFilled, TbTriangleFilled } from "react-icons/tb";

type Props = {
  change: string;
};

export default function PercentageChange({ change }: Props) {
  if (!change) return null;

  const changeAsNumber = Number(change);

  if (isNaN(changeAsNumber)) return null;

  const color = changeAsNumber < 0 ? styleUtils.red : styleUtils.green;

  return (
    <article className={`${color} ${styleUtils.flex_center}`}>
      {changeAsNumber < 0 ? <TbTriangleInvertedFilled /> : <TbTriangleFilled />}
      {change}
    </article>
  );
}
