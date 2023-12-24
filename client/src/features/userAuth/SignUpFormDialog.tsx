import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { useRegisterMutation } from "slices/userApiSlice";
import { setCredentials } from "slices/userAuthSlice";

import Button from "components/ui/button/Button";

import styles from "./UserStatusForm.module.css";

type Props = {
  setIsSignUpShown: (isSignUp: boolean) => void;
  setIsDialogOpen: (isSignUp: boolean) => void;
};

export default function SignUpFormDialog({
  setIsSignUpShown,
  setIsDialogOpen,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [register] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await register({
        name,
        email,
        password,
      }).unwrap();
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
          }}
        />
        <fieldset>
          <legend>sign up</legend>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />
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
          Register
        </Button>
      </form>
      <p>
        Already have an account?{" "}
        <Button onClick={() => setIsSignUpShown(false)}>Sign In</Button>
      </p>
    </>
  );
}
