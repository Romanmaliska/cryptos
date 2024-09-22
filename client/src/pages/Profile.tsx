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
        <Button
          onClick={() => setShowUserData(true)}
          className={!showUserData ? "btn_primary" : "btn_secondary"}
        >
          Personal Data
        </Button>
        <Button
          onClick={() => setShowUserData(false)}
          className={showUserData ? "btn_primary" : "btn_secondary"}
        >
          Account setting
        </Button>
      </aside>
      <main className="p-2">
        {showUserData ? (
          <>
            <h4 className="p-2 font-bold">User Name:</h4>
            <p className="p-2 font-bold">{name}</p>
            <h4 className="p-2 font-bold">User Email: </h4>
            <p className="p-2 font-bold">{email}</p>
          </>
        ) : (
          <>
            <div className="flex flex-col p-2">
              <h4>Change Password</h4> <Button>Change</Button>
              <h4>Delete Account</h4> <Button>Delete</Button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
