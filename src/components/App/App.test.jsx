import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import App from "./App";

describe("Top level App", () => {
  it("Renders App correctly", () => {
    const rendered = shallow(<App />);
    expect(toJson(rendered)).toMatchSnapshot();
  });
});
