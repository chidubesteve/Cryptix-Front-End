import React from 'react'

// internal import
import style from './Button.module.css'

const Button = ({btnName, handleClick, className, icon}) => {

  const classNames = `${style.button} ${className ? className : ''}`
  return (
    <div className={style.box}>
      <button className={classNames} onClick={() => handleClick()}> {btnName} {icon && icon}</button>
      </div>
  )
}

export default Button