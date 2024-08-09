import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  users: { id: number; name: string }[];
}

const initialState: UserState = {
  users: [], // Ensure this matches what you expect as the initial state
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    updateUser(state, action) {
      const { id, field, value } = action.payload;
      const user = state.users.find((user) => user.id === id);
      if (user) {
        user[field] = value;
      }
    },
    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
