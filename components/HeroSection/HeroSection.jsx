import React from "react";
import Image from "next/image";

// Internal Imports
import style from "./HeroSection.module.css";
import { Button } from "../ComponentIndex";
import images from "../../images";

function HeroSection() {
  return (
    <div className={style.heroSection}>
      <div className={style.heroSection_box}>
        <div className={style.heroSection_box_left}>
          <h1>
            Discover, collect, and sell NFTs
          </h1>
          <p>
            Discover the most outstanding NFTs in all topics of life. Create
            your NFTs and sell them
          </p>
          <Button btnName="Explore NFTs" />
        </div>
        <div className={style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero Section image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
