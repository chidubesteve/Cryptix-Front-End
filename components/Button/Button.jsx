import React, { forwardRef } from "react";
import { useRouter } from "next/router";

// internal import
import style from "./Button.module.css";

const Button = forwardRef(({ type="button", btnName, handleClick, className, icon, href }, ref) => {
  const router = useRouter();

  const onClickHandler = () => {
    if (href) {
      router.push(href); // Navigate to the specified href
    }
    if (handleClick) {
      handleClick(); // Call additional custom logic
    }
  };

  const classNames = `${style.button} ${className ? className : ""}`;
  return (
    <button ref={ref} className={classNames} onClick={onClickHandler} type={type}>
      {btnName} {icon && icon}
    </button>
  );
});
Button.displayName = 'Button'

export default Button;
