import React, { useState } from "react";
import Image from "next/future/image";
import Link from "next/link";

// INTERNAL IMPORTS
import style from "./horizontalAudioCard.module.css";
import images from "../../../../images";
import GradientIcon from "../../../../utils/GradientIcon";
import useAudio from "../../../hooks/useAudio";

const HorizontalAudioCard = ({ title, bgImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { play, pause } = useAudio({ isPlaying });

  return (
    <div className={style.horizontalAudioCard_box}>
      {/* left box */}
      <Link href={"/nft-detail"}>
        <div className={style.horizontalAudioCard_box_left_box}>
          <div className={style.horizontalAudioCard_box_left_box_img_box}>
            <Image
              src={bgImage}
              alt={title}
              width={300}
              height={300}
              className={style.horizontalAudioCard_box_left_box_img}
              placeholder="data:image/..."
            />
          </div>
          <div className={style.horizontalAudioCard_box_left_box_info}>
            <h1>{title}</h1>
            <div
              className={style.horizontalAudioCard_box_left_box_info_lower_box}
            >
              <div
                className={
                  style.horizontalAudioCard_box_left_box_info_lower_box_users
                }
              >
                <Image
                  src={images.user3}
                  alt="user1"
                  width={40}
                  height={40}
                  className={
                    style.horizontalAudioCard_box_left_box_info_lower_box_users_imgs
                  }
                />
                <Image
                  src={images.user4}
                  alt="user2"
                  width={40}
                  height={40}
                  className={
                    style.horizontalAudioCard_box_left_box_info_lower_box_users_imgs
                  }
                />
                <Image
                  src={images.user5}
                  alt="user3"
                  width={40}
                  height={40}
                  className={
                    style.horizontalAudioCard_box_left_box_info_lower_box_users_imgs
                  }
                />
              </div>
              <div
                className={
                  style.horizontalAudioCard_box_left_box_info_lower_box_price
                }
              >
                {" "}
                <small>Price</small>
                <p>0.055 ETH</p>
              </div>
              <div
                className={
                  style.horizontalAudioCard_box_left_box_info_lower_box_quantity
                }
              >
                1 of 12
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* right box */}
      <div className={style.horizontalAudioCard_box_right_box}>
        <button
          className={style.horizontalAudioCard_box_right_box_btn}
          onClick={() => {
            setIsPlaying((isPlaying) => !isPlaying);
          }}
        >
          <GradientIcon isPlaying={!isPlaying} />
        </button>
      </div>
    </div>
  );
};

export default HorizontalAudioCard;
