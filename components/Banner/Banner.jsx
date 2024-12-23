import Image from "next/image";
import React from "react";

import styles from "./Banner.module.css";
import { useTheme } from "next-themes";

const Banner = ({ bannerImg }) => {

  const {resolvedTheme} = useTheme()
  return (
    <div className={styles.banner}>
      <div
        className={styles.banner_box}
        style={{
          backgroundColor: !bannerImg
            ? resolvedTheme === "dark"
              ? "#0e131f"
              : "#fef2f8"
            : "transparent", // Transparent if bannerImg is provided
        }}
      >
        {bannerImg && (
          <Image
            src={bannerImg}
            alt="banner"
            width={1620}
            height={350}
            placeholder="blur"
            className={styles.banner_img}
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
