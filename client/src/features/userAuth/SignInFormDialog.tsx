import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";

import { useLoginMutation } from "slices/userApiSlice";
import { setCredentials } from "slices/userAuthSlice";

import Button from "components/ui/button/Button";

import styles from "./UserStatusForm.module.css";

type Props = {
  setIsSignUpShown: (isSignUpShown: boolean) => void;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
};

export default function SignInFormDialog({
  setIsSignUpShown,
  setIsDialogOpen,
}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className={styles.form}>
        <IoClose
          onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => {
            e.stopPropagation();
            setIsDialogOpen(false);
            setIsSignUpShown(true);
          }}
        />
        <fieldset>
          <legend>sign in</legend>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@email.com"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </fieldset>
        <Button onClick={handleSubmit} className="btn_secondary">
          Sign In
        </Button>
      </form>
      <p>
        Not Registered?{" "}
        <Button onClick={() => setIsSignUpShown(true)}>Sign Up</Button>
      </p>
    </>
  );
}
