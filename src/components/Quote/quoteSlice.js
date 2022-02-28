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
      const { quote, quoteIndex, author, authorIndex } = action.payload;
      state.quote = quote;
      state.quoteIndex = quoteIndex;
      state.author = author;
      state.authorIndex = authorIndex;
    },
  },
});

export const { setMode, generateQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
