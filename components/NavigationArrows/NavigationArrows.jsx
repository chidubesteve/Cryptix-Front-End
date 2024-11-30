import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

//internal imports
import style from "./NavigationArrows.module.css";

export const LeftNavigationArrow = ({ handlePrev, className }) => {
  const classname = `${style.navigation_arrows_box} ${
    className ? className : ""
  }`;
  return (
    <div className={classname} onClick={handlePrev}>
      <span>
        <HiArrowLeft
          className={style.navigation_arrows_box_arrow_left}
          title="previous"
        />
      </span>
    </div>
  );
};

export const RightNavigationArrow = ({ handleNext, className }) => {
  const classname = `${style.navigation_arrows_box} ${
    className ? className : ""
  }`;
  return (
    <div className={classname} onClick={handleNext}>
      <span>
        <HiArrowRight
          className={style.navigation_arrows_box_arrow_right}
          title="next"
        />
      </span>
    </div>
  );
};
