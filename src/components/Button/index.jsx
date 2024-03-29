import React from "react";
import { func, string } from "prop-types";
import cx from "classnames";

const propTypes = {
  className: string,
  onClick: func.isRequired,
};

const defaultProps = {
  className: "",
};

function Button({ children, className, onClick }) {
  return (
    <button
      className={cx(
        "border-box f6 br3 ph3 pv2 mb3 dib near-white bg-transparent ba-ns b--near-white pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
