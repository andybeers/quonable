import React from "react";
import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import "./vendor/tachyons.min.css";

import App from "./components/App";
import quoteSlice from "./components/Quote/quoteSlice";

export const store = configureStore({
  reducer: quoteSlice,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
