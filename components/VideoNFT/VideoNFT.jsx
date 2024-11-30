import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// internal imports
import style from "./VideoNFT.module.css";
import VideoNFTCard from "./VideoNFTCard/VideoNFTCard";
import Title from "../Title/Title";
import images from "../../images";
import {
  LeftNavigationArrow,
  RightNavigationArrow,
} from "../NavigationArrows/NavigationArrows";
import SeeMore from "../SeeMore/SeeMore";

const VideoNFT = () => {
  const sliderRef = useRef(null);
  const videoCardRef = useRef(null);

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
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={style.VideoNFT}>
      <div className={style.VideoNFT_box}>
        <div className={style.VideoNFT_box_title}>
          <Title
            title={"Explore NFTs Video"}
            paragraph={"Click on play icon and enjoy NTFs video"}
          />
          <div className={style.VideoNFT_box_title_arrows}>
            <LeftNavigationArrow handlePrev={handlePrevious} />
            <RightNavigationArrow handleNext={handleNext} />
          </div>
        </div>
        <ul className={style.VideoNFT_box_cards}>
          <Slider
            {...sliderSettings}
            ref={(slider) => (sliderRef = slider)}
            className={style.VideoNFT_box_cards_slider}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <li
                key={index}
                className={style.VideoNFT_box_cards_card}
                ref={videoCardRef}
              >
                <VideoNFTCard
                  coverImgs={images[`videocover${index + 1}`]}
                  nftNames={`NFT video #150${index + 1}`}
                />
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default VideoNFT;
