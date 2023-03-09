import { createSlice } from "@reduxjs/toolkit";
import { createWork } from "./actions/createWorkAction";
import { deleteWork } from "./actions/deleteWorkAction";
import { getUser } from "./actions/getUserAction";
import { getWorks } from "./actions/getWorksAction";

const initialState = {
  user: {},
  works: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getInfo
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // getWorks
    builder.addCase(getWorks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getWorks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.works = action.payload;
    });
    builder.addCase(getWorks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // createWork
    builder.addCase(createWork.fulfilled, (state, action) => {
      state.isLoading = false;
      state.works = [...state.works, action.payload];
    });

    // deleteWork
    builder.addCase(deleteWork.fulfilled, (state, action) => {
      state.isLoading = false;
      state.works = [
        ...state.works.filter((work) => work._id !== action.payload._id),
      ];
    });
  },
});
