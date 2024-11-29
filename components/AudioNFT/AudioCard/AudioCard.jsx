import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import { HiOutlinePause } from "react-icons/hi2";

// INTERNAL IMPORTS
import style from "./AudioCard.module.css";
import Image from "next/future/image";
import { Like } from "../../ComponentIndex";
import images from "../../../images";
import GradientIcon from "../../../utils/GradientIcon";
import useAudio from "../../hooks/useAudio";
const AudioCard = ({ title, image, usersImgs }) => {
  const [liked, setLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const {play, pause} = useAudio({isPlaying})

  const handleLike = () => {
    setLiked((prev) => !prev);
  };
  return (
    <div className={style.audioCard_box}>
      <div>
        <div className={style.audioCard_box_img}>
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            quality={90}
            className={style.audioCard_box_img_img}
          />
        </div>
      </div>
      <div className={style.audioCard_box_like_box}>
        <Like
          isLiked={liked}
          handleClick={handleLike}
          customStyle={{
            padding: "0px",
            width: "40px",
            height: "40px",
            textAlign: "center",
          }}
        />
      </div>
      {/* time div */}
      <div className={style.audioCard_box_time_box}>
        <svg
          viewBox="0 0 196 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style.audioCard_box_time_box_svg}
        >
          <path
            d="M196 55V0H0.5V1H4.05286C12.4067 1 20.1595 5.34387 24.5214 12.4685L43.5393 43.5315C47.9012 50.6561 55.654 55 64.0078 55H196Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className={style.audioCard_box_time_box_time}>
          <span className={style.audioCard_box_time_box_time_span1}>
            Remaining time
          </span>
          <span className={style.audioCard_box_time_box_time_span2}>
            3h : 25m : 30s
          </span>
        </div>
      </div>
      {/* music player and nft info div */}
      <div className={style.audioCard_box_music_info_box}>
        <div className={style.audioCard_box_music_info_box_music_box}>
          <div
            style={{ display: "flex", flexGrow: 1, justifyContent: "center" }}
          >
            <Image
              src={images.musicWave}
              className={style.audioCard_box_music_info_box_music_box_music_img}
              width={209}
              height={29}
              alt="music player"
            />
          </div>
          <button
            className={
              style.audioCard_box_music_info_box_music_box_music_play_icon
            }
            onClick={() => {
              setIsPlaying((isPlaying) => !isPlaying);
            }}
          >
            <GradientIcon isPlaying={!isPlaying} />
          </button>
        </div>
        <Link href={"/nft-detail"}>
          <div className={style.audioCard_box_music_info_box_nft_info_box}>
            <div
              className={
                style.audioCard_box_music_info_box_nft_info_box_upper_box
              }
            >
              <h2>{title}</h2>
              <div
                className={
                  style.audioCard_box_music_info_box_nft_info_box_upper_box_avatars
                }
              >
                <Image
                  src={usersImgs}
                  className={
                    style.audioCard_box_music_info_box_nft_info_box_upper_box_avatars_avatar
                  }
                  width={50}
                  height={50}
                  alt="avatar"
                />
                <Image
                  src={usersImgs}
                  className={
                    style.audioCard_box_music_info_box_nft_info_box_upper_box_avatars_avatar
                  }
                  width={50}
                  height={50}
                  alt="avatar"
                />
                <Image
                  src={usersImgs}
                  className={
                    style.audioCard_box_music_info_box_nft_info_box_upper_box_avatars_avatar
                  }
                  width={50}
                  height={50}
                  alt="avatar"
                />
                <Image
                  src={usersImgs}
                  className={
                    style.audioCard_box_music_info_box_nft_info_box_upper_box_avatars_avatar
                  }
                  width={50}
                  height={50}
                  alt="avatar"
                />
              </div>
            </div>
            <div
              className={
                style.audioCard_box_music_info_box_nft_info_box_lower_box
              }
            >
              <div
                className={
                  style.audioCard_box_music_info_box_nft_info_box_lower_box_price
                }
              >
                <small>Price</small>
                <p>0.055 ETH</p>
              </div>
              <span
                className={
                  style.audioCard_box_music_info_box_nft_info_box_lower_box_span
                }
              >
                92 in stock
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AudioCard;
