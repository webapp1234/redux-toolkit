import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, GET_USER, POST_USER, UPDATE_USER } from "../../constant";

export let getUser = createAsyncThunk("getUser", async () => {
  let { data } = await axios.get(BASE_URL + GET_USER);

  return data;
});

export let postUser = createAsyncThunk("postUser", async (action) => {
  console.log(action, "acton from api post");
  let res = await axios.post(BASE_URL + POST_USER, action);
  console.log(res);
  return res;
});

export let updateUser = createAsyncThunk("updateUser", async (action) => {
  console.log(action, "acton from api update");
  let { data } = await axios.put(BASE_URL + UPDATE_USER + action.id, action);

  return data;
});
