import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "store/store";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const { name } = userAuth ? userAuth : { name: null };

  if (name) return children;
  
  return <Navigate to="/" />;
}
