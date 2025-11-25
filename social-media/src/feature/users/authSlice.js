import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userinfo: JSON.parse(localStorage.getItem("user")) || null,
};

export const userSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    loggedInUsers: (state, action) => {
      state.userinfo = action.payload;
    },
    loggedOutUsers: (state) => {
      state.userinfo = null;
    },
  },
});
export const { loggedInUsers, loggedOutUsers } = userSlice.actions;

export default userSlice.reducer;
