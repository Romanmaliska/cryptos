import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="logo" width={120} height={32} />
    </Link>
  );
}
