import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { useLogoutMutation } from "slices/userApiSlice";
import { removeCredentials } from "slices/userAuthSlice";

import { Popover } from "@headlessui/react";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import styles from "features/userAuth/UserStatusForm.module.css";

type Props = {
  name: string;
};

export default function UserMenu({ name }: Props) {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout({}).unwrap();
      dispatch(removeCredentials());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Popover>
      <Popover.Button>
        <FaRegUser size="24px" color="white" />
      </Popover.Button>
      <Popover.Panel className={styles.user_panel}>
        <NavLink to={"/profile"}>
          <Popover.Button>
            {name}
            <IoIosArrowForward />
          </Popover.Button>
        </NavLink>
        <Popover.Button onClick={() => handleLogout()}>Log Out</Popover.Button>
      </Popover.Panel>
    </Popover>
  );
}
