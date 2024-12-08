import React from "react";
import { useTheme } from "next-themes";

//internal imports
import style from "./CustomDropdown.module.css";

const CustomDropdown = ({ childrenObj, className }) => {
  const { resolvedTheme } = useTheme();
  const classNames = `${style.dropdown} ${className ? className : ""}`;
  return (
    <div
      className={`${classNames} ${
        resolvedTheme === "dark" && style.dark_dropdown
      }`}
    >
      <ul role="menu" className={style.dropdown_list}>
        {childrenObj.map((el, i) => (
          <li key={i} role="menuitem" className={style.dropdown_list_item}>
            <button
              className={`${style.dropdown_list_item_btn} ${
                resolvedTheme === "dark" && style.dark_dropdown_list_item_btn
              }`}
            >
              <div className={style.dropdown_list_item_btn_icon}>{el.icon}</div>
              <span className={style.dropdown_list_item_btn_text}>
                {el.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropdown;
