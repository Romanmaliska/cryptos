import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store/store";
import { useChangePasswordMutation } from "slices/userApiSlice";

import { IoClose } from "react-icons/io5";

import Dialog from "components/ui/dialog/Dialog";
import Button from "components/ui/button/Button";

export default function Profile() {
  const [showUserData, setShowUserData] = useState(true);

  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const userAuthData = userAuth
    ? userAuth
    : { name: null, email: null, _id: null };

  return (
    <>
      <aside>
        <h2 className="py-4">Profile Page</h2>
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
          <UserInfo userAuthData={userAuthData} />
        ) : (
          <UserForm userAuthData={userAuthData} />
        )}
      </main>
    </>
  );
}

function UserForm({ userAuthData }: { userAuthData: { _id: string } }) {
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmedNewPassword, setConfirmedNewPassword] = useState("");

  const { _id } = userAuthData;
  const [changePassword] = useChangePasswordMutation();

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await changePassword({ _id, newPassword });

      if (!("error" in response)) {
        setIsPasswordDialogOpen(!isPasswordDialogOpen);
        setNewPassword("");
        setConfirmedNewPassword("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col p-2 gap-4">
        <div>
          <h4>Change Password</h4>
          <Button
            onClick={() => setIsPasswordDialogOpen(!isPasswordDialogOpen)}
          >
            Change
          </Button>
          <Dialog isOpen={isPasswordDialogOpen} onClose={() => {}}>
            <IoClose
              className="text-white w-8 h-auto absolute top-4 right-4 cursor-pointer hover:text-orange"
              onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => {
                e.stopPropagation();
                setIsPasswordDialogOpen(!isPasswordDialogOpen);
              }}
            />
            <h2 className="text-white py-8">Change Password</h2>
            <form className="flex flex-col gap-4">
              <input
                type="password"
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmedNewPassword(e.target.value)}
                value={confirmedNewPassword}
              />
              <Button className="btn_secondary" onClick={handleSubmit}>
                Change
              </Button>
            </form>
          </Dialog>
        </div>
        <div>
          <h4>Delete Account</h4>
          <Button>Delete</Button>
        </div>
      </div>
    </>
  );
}

function UserInfo({
  userAuthData,
}: {
  userAuthData: { name: string; email: string };
}) {
  const { name, email } = userAuthData;
  return (
    <>
      <h4 className="p-2 font-bold">User Name:</h4>
      <p className="p-2 font-bold">{name}</p>
      <h4 className="p-2 font-bold">User Email: </h4>
      <p className="p-2 font-bold">{email}</p>
    </>
  );
}
