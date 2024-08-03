import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

//internal imports
import style from './Like.module.css';

const Like = ({ isLiked, noOfLikes, handleClick }) => {
  return (
    <div className={style.like_box}>
      {isLiked ? (
        <AiFillHeart
          className={style.like_icon}
          fill="red"
          onClick={() => handleClick()}
        />
      ) : (
        <AiOutlineHeart className={style.like_icon} onClick={() => handleClick()} />
      )}
      <span>{noOfLikes}</span>
    </div>
  );
};

export default Like;
