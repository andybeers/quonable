import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quote: "test",
  quoteIndex: 0,
  author: "test",
  authorIndex: 0,
  mode: "goofy",
};

const quoteSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    generateQuote: (state, action) => {
      const { quote, author } = action.payload;
      state.quote = quote;
      state.author = author;
    },
  },
});

export const { setMode, generateQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
