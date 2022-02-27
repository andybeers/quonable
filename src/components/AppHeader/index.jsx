import React from "react";
import quonableSvg from "../../imgs/quonable.svg";

import "./AppHeader.css";

function AppHeader() {
  return (
    <header>
      <img src={quonableSvg} alt="quonable" className="ma0 pa3" />
    </header>
  );
}

export default AppHeader;
