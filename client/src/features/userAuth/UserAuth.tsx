import { useState } from "react";

import Dialog from "components/ui/dialog/Dialog";
import SignInFormDialog from "features/userAuth/SignInFormDialog";
import SignUpFormDialog from "features/userAuth/SignUpFormDialog";

export default function UserAuth() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  console.log(isSignUp);

  return (
    <section onClick={() => setIsDialogOpen(true)}>
      <h2>Sign Up</h2>
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        {isSignUp ? (
          <SignUpFormDialog setIsSignUp={setIsSignUp} />
        ) : (
          <SignInFormDialog setIsSignUp={setIsSignUp} />
        )}
      </Dialog>
    </section>
  );
}
