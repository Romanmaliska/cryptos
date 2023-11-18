import { useState } from "react";

import styles from "./UserStatusForm.module.css";

import Button from "components/ui/button/Button";

type Props = {
  setIsSignUp: (isSignUp: boolean) => void;
};

export default function SignInFormDialog({ setIsSignUp }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    console.log(data);
    // fetch("/api/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
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
        <Button onClick={() => setIsSignUp(true)}>Sign Up</Button>
      </p>
    </>
  );
}
