import { createSlice } from "@reduxjs/toolkit";
import { getUser, postUser, updateUser } from "../api/api";

let initialState = {
  user: [],
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    //get user
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      console.log(action, "action from reduxer");
      state.isLoading = false;
      state.user = action.payload;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("error", action.payload);
    });

    //post user
    builder.addCase(postUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(postUser.fulfilled, (state, action) => {
      console.log(action, "action from reducer");
      state.isLoading = false;
      state.user.push(action.payload.data);
    });

    builder.addCase(postUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    //update

    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = state.user.map((val) =>
        val.id == action.payload.id ? { ...action.payload } : val
      );
    });

    builder.addCase(updateUser.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
