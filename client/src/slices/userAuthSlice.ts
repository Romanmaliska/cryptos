import { createSlice } from "@reduxjs/toolkit";

const userAuthString = localStorage.getItem("userAuth");
const initialState = {
  userAuth: userAuthString ? JSON.parse(userAuthString) : null,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userAuth = action.payload;
      localStorage.setItem("userAuth", JSON.stringify(action.payload));
    },
    removeCredentials: (state) => {
      state.userAuth = null;
      localStorage.removeItem("userAuth");
    },
  },
});

export default userAuthSlice.reducer;
export const { setCredentials, removeCredentials } = userAuthSlice.actions;
