import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
export const selectedMovieSlice = createSlice({
  name: "selectedMovie",
  initialState,
  reducers: {
    setSelectedMovie: (state, action) => {
      state.data = action.payload;       
    },
    clearSelectedMovie: (state) => {
      state.data = null;
    },
  },
});

export const { setSelectedMovie, clearSelectedMovie } = selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;
