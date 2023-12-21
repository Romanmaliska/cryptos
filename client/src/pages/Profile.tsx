import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store/store";

import Button from "components/ui/button/Button";

export default function Profile() {
  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const { name, email } = userAuth ? userAuth : { name: null, email: null };
  const [showUserData, setShowUserData] = useState(true);

  return (
    <>
      <aside>
        <h2>Profile Page</h2>
        <Button onClick={() => setShowUserData(true)}>Personal Data</Button>
        <Button onClick={() => setShowUserData(false)}>Account setting</Button>
      </aside>
      {showUserData ? (
        <main>
          <h3>Personal Data</h3>
          <p>{name}</p>
          <p>{email}</p>
        </main>
      ) : (
        <main>
          <h3>Account setting</h3>
          <p>Change Name</p> <Button>Change</Button>
          <p>Change Password</p> <Button>Change</Button>
          <p>Delete Account</p> <Button>Delete</Button>
        </main>
      )}
    </>
  );
}
