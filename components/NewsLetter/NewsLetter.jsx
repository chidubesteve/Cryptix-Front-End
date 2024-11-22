import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/future/image";

// internal imports
import style from "./NewsLetter.module.css";
import images from "../../images";
const NewsLetter = () => {
  return (
    <div className={style.subscribe}>
      <div className={style.subscribe_box}>
        <div className={style.subscribe_box_left}>
          <div className={style.subscribe_box_left_item}>
            <h2 className={style.subscribe_box_left_header}>
              Never miss a drop!
            </h2>
            <span className={style.subscribe_box_left_text}>
              Subscribe to our super-exclusive drop list and be the first to
              know about upcoming drops
            </span>
            <ul className={style.subscribe_box_left_list}>
              <li>
                <span className={style.subscribe_box_left_list_span1}>01</span>
                <p>Get more discount</p>
              </li>
              <li>
                <span className={style.subscribe_box_left_list_span2}>02</span>
                <p>Get premium magazines</p>
              </li>
            </ul>
            <div className={style.subscribe_box_left_input}>
              <input type="email" placeholder="Enter your email"></input>
              <button className={style.subscribe_box_left_input_btn}>
                <FiArrowRight
                  className={style.subscribe_box_left_input_arrow_icon}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={style.subscribe_box_right}>
          <Image
            src={images.newsletter}
            alt="subscribe to newsLetter"
            height={487}
            width={648}
            placeholder="blur"
            className={style.subscribe_box_right_image}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
