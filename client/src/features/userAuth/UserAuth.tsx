import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store/store";

import Dialog from "components/ui/dialog/Dialog";
import SignInFormDialog from "features/userAuth/SignInFormDialog";
import SignUpFormDialog from "features/userAuth/SignUpFormDialog";
import UserMenu from "features/userAuth/UserMenu";

export default function UserAuth() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSignUpShown, setIsSignUpShown] = useState(true);

  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const { name } = userAuth ? userAuth : { name: null };

  return (
    <>
      {name && <UserMenu name={name} />}
      <section onClick={() => setIsDialogOpen(true)}>
        <h2>Sign Up</h2>
        <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          {isSignUpShown ? (
            <SignUpFormDialog setIsSignUpShown={setIsSignUpShown} />
          ) : (
            <SignInFormDialog setIsSignUpShown={setIsSignUpShown} />
          )}
        </Dialog>
      </section>
    </>
  );
}
