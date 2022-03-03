import React from 'react'

export const Input = ({ className, ...rest }) => {
  return (
    <input className={`${className}`} {...rest}></input>
  )
}

export default Input