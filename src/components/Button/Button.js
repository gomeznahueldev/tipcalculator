import React from 'react'

const Button = ({type, className, textButton, disabled}) => {
  return <button type={type} className={className} disabled={disabled} >{textButton}</button>
}

export default Button