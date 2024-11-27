import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

//internal imports
import style from "./Like.module.css";

const Like = ({ isLiked, noOfLikes, handleClick, customStyle }) => {
  return (
    <button
      className={style.like_box}
      style={customStyle}
      onClick={handleClick}
      aria-pressed={isLiked} // Optional for accessibility
    >
      {isLiked ? (
        <AiFillHeart className={style.like_icon} fill="red" />
      ) : (
        <AiOutlineHeart className={style.like_icon} />
      )}
      {noOfLikes && <span>{noOfLikes}</span>}
    </button>
  );
};

export default Like;
