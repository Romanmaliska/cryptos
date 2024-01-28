import { Coin } from "types/common";

type Props = {
  coin: Coin;
};

export default function CoinStats({ coin }: Props) {
  const {
    "24hVolume": volume,
    description,
    marketCap,
    websiteUrl,
    name,
  } = coin;

  console.log(coin);

  return (
    <section>
      <h2>About {name}</h2>
      <a href={websiteUrl}>Website</a>
      <p>{description}</p>
      <p>{marketCap}</p>
      <p>{volume}</p>
    </section>
  );
}
