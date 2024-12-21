import React, { useRef } from "react";
import { FaCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// internal imports
import style from "./Category.module.css";
import images from "../../images";
import Image from "next/image";
import {
  LeftNavigationArrow,
  RightNavigationArrow,
  Title,
} from "../ComponentIndex";

const Category = () => {
  let sliderRef = useRef(null);
  const categoryRef = useRef(null);
  const CategoryArray = [
    { id: 1, title: "Entertainment", count: "1169 NFTs", image: "category1" },
    { id: 2, title: "Art", count: "1202 NFTs", image: "category2" },
    { id: 3, title: "Music", count: "8706 NFTs", image: "category3" },
    { id: 4, title: "Gaming", count: "1544 NFTs", image: "category4" },
    { id: 5, title: "Science", count: "432 NFTs", image: "category5" },
    { id: 6, title: "Sports", count: "6272 NFTs", image: "category6" },
  ];

  const handleNext = () => {
    sliderRef.slickNext();
  };
  const handlePrevious = () => {
    sliderRef.slickPrev();
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    arrows: false,
    speed: 1300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={style.category}>
      <div className={style.category_box_title}>
        <Title
          title="Browse by category"
          paragraph="Explore the NFTs in the most featured categories."
        />
        <div className={style.navigationArrowsBox}>
          <LeftNavigationArrow handlePrev={handlePrevious} />
          <RightNavigationArrow handleNext={handleNext} />
        </div>
      </div>
      <Slider
        {...sliderSettings}
        className={style.category_box}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        {CategoryArray.map((element) => (
          <div
            className={style.category_box_item}
            key={element.id}
            ref={categoryRef}
          >
            <Image
              src={images[element.image]}
              alt="category"
              width={350}
              height={150}
              placeholder="data:image/..."
              className={style.category_image}
            />
            <div className={style.category_box_item_title}>
              <span className={style.category_box_item_title_span}>
                <FaCircle className={style.category_box_item_title_span_icon} />
              </span>
              <div className={style.category_box_item_title_info}>
                <h3>{element.title}</h3>
                <small>{element.count}</small>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
