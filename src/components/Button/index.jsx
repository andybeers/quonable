import React from 'react'
import { func, string } from 'prop-types'

const propTypes = {
  className: string,
  onClick: func.isRequired,
}

const defaultProps = {
  className: '',
}

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`f6 br3 ph3 pv2 mb3 dib near-white bg-transparent bw1 b--near-white pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
export default Button
