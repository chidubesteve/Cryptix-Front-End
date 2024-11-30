import React, { useRef, useState } from "react";
import Link from "next/link";

//internal imports
import style from "./VideoNFTCard.module.css";
import Image from "next/future/image";
import GradientIcon from "../../../utils/GradientIcon";
import Like from "../../Like/Like";
import images from "../../../images";
import useVideo from "../../../hooks/useVideo";

const VideoNFTCard = ({ coverImgs, nftNames }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const videoRef = useRef(null);
  const { play, pause } = useVideo({ videoRef, isPlaying });

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
    if (!isPlaying) play();
    else pause();
  };

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className={style.VideoNFTCard}>
      <div className={style.VideoNFTCard_box_upper_box}>
        {/* <div className={style.VideoNFTCard_box_upper_box_video_box}> */}
        <video
          className={style.VideoNFTCard_box_upper_box_video}
          ref={videoRef}
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          <source
            src="https://www.w3schools.com/html/mov_bbb.ogg"
            type="video/ogg"
          />
          Your browser does not support the video tag
        </video>
        <button
          className={style.VideoNFTCard_box_upper_box_video_controls}
          onClick={togglePlayPause}
        >
          <GradientIcon isPlaying={!isPlaying} />
        </button>
        <div
          className={style.VideoNFTCard_box_upper_box_video_coverImg}
          style={{
            opacity: isPlaying ? "0" : "1",
            transition: "opacity 1s ease-in-out",
          }}
        >
          <Image
            src={coverImgs}
            alt="cover Image"
            width={300}
            height={300}
            placeholder="data:image/..."
            className={style.VideoNFTCard_box_upper_box_video_coverImg_img}
          />
        </div>
          <Like
            isLiked={isLiked}
            handleClick={handleLike}
            customStyle={{
              padding: "0px",
              width: "40px",
              height: "40px",
              textAlign: "center",
              top: ".5rem",
              right: ".5rem",
            }}
          />
        {/* </div> */}
      </div>
      {/* lower section */}
      <Link href={{ pathname: "/nft-details" }}>
        <div className={style.VideoNFTCard_box_lower_box}>
          <div className={style.VideoNFTCard_box_lower_box_title}>
            <h2>{nftNames}</h2>
            <div
              className={style.VideoNFTCard_box_lower_box_title_user_quantity}
            >
              <div
                className={
                  style.VideoNFTCard_box_lower_box_title_user_quantity_users
                }
              >
                <Image
                  src={images.user5}
                  alt="user"
                  width={40}
                  height={40}
                  placeholder="blur"
                  className={
                    style.VideoNFTCard_box_lower_box_title_user_quantity_users_img
                  }
                />
                <Image
                  src={images.user6}
                  alt="user"
                  width={40}
                  height={40}
                  placeholder="blur"
                  className={
                    style.VideoNFTCard_box_lower_box_title_user_quantity_users_img
                  }
                />
                <Image
                  src={images.user7}
                  alt="user"
                  width={40}
                  height={40}
                  placeholder="blur"
                  className={
                    style.VideoNFTCard_box_lower_box_title_user_quantity_users_img
                  }
                />
                <Image
                  src={images.user8}
                  alt="user"
                  width={40}
                  height={40}
                  placeholder="blur"
                  className={
                    style.VideoNFTCard_box_lower_box_title_user_quantity_users_img
                  }
                />
              </div>
              <span
                className={
                  style.VideoNFTCard_box_lower_box_title_user_quantity_quantity
                }
              >
                1 of 20
              </span>
            </div>
          </div>
          <div className={style.VideoNFTCard_box_lower_box_price_time}>
            <div className={style.VideoNFTCard_box_lower_box_price_time_price}>
              {" "}
              <small>Price</small>
              <p>1.000 ETH</p>
            </div>
            <div className={style.VideoNFTCard_box_lower_box_price_time_time}>
              <span
                className={
                  style.VideoNFTCard_box_lower_box_price_time_time_span
                }
              >
                Remaining time
              </span>
              <span
                className={
                  style.VideoNFTCard_box_lower_box_price_time_time_time
                }
              >
                3h : 25m : 30s
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoNFTCard;
