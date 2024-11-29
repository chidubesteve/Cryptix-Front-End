import React from "react";

//INTERNAL IMPORT
import style from "./AudioNFT.module.css";
import { Title } from "../ComponentIndex";
import AudioCard from "./AudioCard/AudioCard";
import images from "../../images";
import HorizontalAudioCard from "./AudioCard/horizontalAudioCard/horizontalAudioCard";

const AudioNFT = () => {
  return (
    <div className={style.AudioNFT}>
      <div className={style.AudioNFT_box}>
        <div className={style.AudioNFT_box_title}>
          <Title
            title={"Listen NFTs audio live"}
            paragraph={"Click on music icon and enjoy NFT music or audio"}
          />
        </div>
        <div className={style.AudioNFT_box_grid_box}>
          {Array.from({ length: 2 }).map((_, index) => (
            <AudioCard
              title={"NFT music #1132"}
              image={images[`creatorbackground1${index + 1}`]}
              usersImgs={images[`user${index + 1}`]}
              key={index}
            />
          ))}
          <div className={style.AudioNFT_box_grid_box_horizontal_box}>

          {Array.from({ length: 3 }).map((_, index) => (
            <HorizontalAudioCard
              title={"NFT music #112"}
              bgImage={images[`creatorbackground${index + 1}`]}
              key={index}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioNFT;
