import React from "react";

// internal imports
import style from "./Title.module.css";
const Title = ({ title, paragraph, p_style }) => {
  return (
    <div className={style.title}>
      <div className={style.title_box}>
        <h2>{title}</h2>
        {paragraph && <p style={ p_style }>{paragraph}</p>}
      </div>
    </div>
  );
};

export default Title;
