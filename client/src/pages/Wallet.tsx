import { useGetUserQuery } from "../slices/userApiSlice";

export default function Wallet() {
  const { data, error, isLoading } = useGetUserQuery({});
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading user data</p>;

  return <div>wakket</div>;
}
