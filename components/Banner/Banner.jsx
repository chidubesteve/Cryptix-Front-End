import Image from "next/future/image";
import React from "react";

import styles from "./Banner.module.css";

const Banner = ({ bannerImg }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_box}>
        <Image
          src={bannerImg}
          alt="banner"
          width={1620}
          height={350}
          placeholder="blur"
          className={styles.banner_img}
        />
      </div>
    </div>
  );
};

export default Banner;
