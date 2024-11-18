import React, { useState, useRef } from "react";
import { FaCalendarWeek } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//internal imports
import style from "./Collection.module.css";
import { Title } from "../ComponentIndex";
import CollectionTabs from "./CollectionTabs/CollectionTabs";
import { LeftNavigationArrow, RightNavigationArrow } from "../ComponentIndex";

const Collection = () => {
  const sliderRef = useRef(null);
  // using a single state to tract selected tab
  const [selectedTab, setSelectedTab] = useState("last24Hours");
  //

  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

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
    centerPadding: "100px",

    arrows: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className={style.collection}>
      <div className={style.collection_title}>
        <Title
          title="Top List Collections"
          paragraph="Discover the new creative economy."
        />
      </div>
      <nav className={style.collection_collections}>
        <ul className={style.collection_collections_list}>
          <li onClick={() => handleSelectedTab("last24Hours")}>
            <button
              className={`${style.collection_collections_list_btn} ${
                selectedTab === "last24Hours" && style.active
              }`}
            >
              <IoMdStopwatch
                style={{
                  width: "1.3rem",
                  height: "50%",
                  marginRight: ".625rem",
                }}
                className={style.tabIcons}
              />
              Last 24 Hours
            </button>
          </li>
          <li onClick={() => handleSelectedTab("last7Days")}>
            {" "}
            <button
              className={`${style.collection_collections_list_btn} ${
                selectedTab === "last7Days" && style.active
              }`}
            >
              <FaCalendarWeek
                style={{
                  width: "1.1rem",
                  height: "50%",
                  marginRight: ".625rem",
                }}
                className={style.tabIcons}
              />
              Last 7 Days{" "}
            </button>
          </li>
          <li onClick={() => handleSelectedTab("last30Days")}>
            {" "}
            <button
              className={`${style.collection_collections_list_btn} ${
                selectedTab === "last30Days" && style.active
              }`}
            >
              <MdOutlineCalendarMonth
                style={{
                  width: "1.3rem",
                  height: "50%",
                  marginRight: ".625rem",
                }}
                className={style.tabIcons}
              />
              Last 30 Days{" "}
            </button>
          </li>
        </ul>
      </nav>

      {/* Conditionally render collectionTabs based on selectedTab */}
      {selectedTab === "last24Hours" && (
        <div className={style.collection_box}>
          <LeftNavigationArrow
            handlePrev={handlePrevious}
            className={style.leftArrow}
          />
          <ul className={style.collectionSlider_list}>
            <Slider
              {...sliderSettings}
              ref={(slider) => (sliderRef = slider)}
              className={style.collectionSlider}
            >
              {Array.from({ length: 7 }).map((el, index) => (
                <li
                  key={index}
                  className={style.collectionSlider_list_item}
                >
                  <CollectionTabs />
                </li>
              ))}
            </Slider>
          </ul>
          <RightNavigationArrow
            handleNext={handleNext}
            className={style.rightArrow}
          />
        </div>
      )}

      {selectedTab === "last7Days" && (
        <div className={style.collection_box}>
          <LeftNavigationArrow
            handlePrev={handlePrevious}
            className={style.leftArrow}
          />
          <ul className={style.collectionSlider_list}>
            <Slider
              {...sliderSettings}
              ref={(slider) => (sliderRef = slider)}
              className={style.collectionSlider}
            >
              {Array.from({ length: 4 }).map((el, index) => (
                <li
                  key={index + 1}
                  className={style.collectionSlider_list_item}
                >
                  <CollectionTabs />
                </li>
              ))}
            </Slider>
          </ul>
          <RightNavigationArrow
            handleNext={handleNext}
            className={style.rightArrow}
          />
        </div>
      )}

      {selectedTab === "last30Days" && (
        <div className={style.collection_box}>
          <LeftNavigationArrow
            handlePrev={handlePrevious}
            className={style.leftArrow}
          />
          <ul className={style.collectionSlider_list}>
            <Slider
              {...sliderSettings}
              ref={(slider) => (sliderRef = slider)}
              className={style.collectionSlider}
            >
              {Array.from({ length: 6 }).map((el, index) => (
                <li
                  key={index + 1}
                  className={style.collectionSlider_list_item}
                >
                  <CollectionTabs />
                </li>
              ))}
            </Slider>
          </ul>
          <RightNavigationArrow
            handleNext={handleNext}
            className={style.rightArrow}
          />
        </div>
      )}
    </div>
  );
};

export default Collection;
