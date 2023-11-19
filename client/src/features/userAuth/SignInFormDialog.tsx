import { useState } from "react";
import { useDispatch } from "react-redux";

import { useLoginMutation } from "slices/userApiSlice";
import { setCredentials } from "slices/userAuthSlice";

import Button from "components/ui/button/Button";

import styles from "./UserStatusForm.module.css";

type Props = {
  setIsSignUpShown: (isSignUpShown: boolean) => void;
};

export default function SignInFormDialog({ setIsSignUpShown }: Props) {
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
        <Button onClick={handleSubmit}>Sign In</Button>
      </form>
      <p>
        Not Registered?{" "}
        <Button onClick={() => setIsSignUpShown(true)}>Sign Up</Button>
      </p>
    </>
  );
}
