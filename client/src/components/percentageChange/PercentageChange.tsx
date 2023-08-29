import { TbTriangleInvertedFilled, TbTriangleFilled } from "react-icons/tb";
import styles from "./PercentageChange.module.css";
import styleUtils from "../../styles/utils.module.css";

type Props = {
  change: string;
};

export default function PercentageChange({ change }: Props) {
  if (!change) return null;

  const changeAsNumber = Number(change);

  if (isNaN(changeAsNumber)) return null;

  const color = changeAsNumber < 0 ? styleUtils.red : styleUtils.green;

  return (
    <article className={`${color} ${styles.percentageChange}`}>
      {changeAsNumber < 0 ? <TbTriangleInvertedFilled /> : <TbTriangleFilled />}
      {change} %
    </article>
  );
}
