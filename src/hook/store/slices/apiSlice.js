import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3030/api/cards";

export const getData = createAsyncThunk("api/getData", async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {

    throw error;
  }
});

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const apiSelector = (state) => state.api;
export default apiSlice.reducer;
