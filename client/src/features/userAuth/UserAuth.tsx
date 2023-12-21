import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store/store";

import Dialog from "components/ui/dialog/Dialog";
import SignInFormDialog from "features/userAuth/SignInFormDialog";
import SignUpFormDialog from "features/userAuth/SignUpFormDialog";
import UserMenu from "features/userAuth/UserMenu";
import Button from "components/ui/button/Button";

export default function UserAuth() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSignUpShown, setIsSignUpShown] = useState(true);

  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const { name } = userAuth ? userAuth : { name: null };

  return (
    <>
      {name && <UserMenu name={name} />}
      <section onClick={() => setIsDialogOpen(true)}>
        <Button className="btn_secondary">Get Started</Button>
        <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          {isSignUpShown ? (
            <SignUpFormDialog
              setIsSignUpShown={setIsSignUpShown}
              setIsDialogOpen={setIsDialogOpen}
            />
          ) : (
            <SignInFormDialog
              setIsSignUpShown={setIsSignUpShown}
              setIsDialogOpen={setIsDialogOpen}
            />
          )}
        </Dialog>
      </section>
    </>
  );
}
