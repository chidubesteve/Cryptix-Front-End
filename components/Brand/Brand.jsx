import Image from "next/future/image";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

// internal imports
import style from "./Brand.module.css";
import images from "../../images";
import { Button } from "../ComponentIndex";

const Brand = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className={style.brand}>
      <div className={style.brand_box}>
        <div className={style.brand_box_left}>
          <div className={style.brand_box_left_logo}>
            <Link href={"/"}>
              <Image src={images.logo} width={100} height={80} alt="logo" />
            </Link>
          </div>
          <div className={style.brand_box_left_text}>
            <h1>Earn free Crypto with Cryptix</h1>
            <span>A digital marketplace that lead and inspires innovation</span>
          </div>
          <div className={style.brand_box_left_btns}>
            <Link href="/create-item" passHref>
              <Button
                btnName={"Create item"}
                className={`${style.brand_box_left_btns_btn1} ${
                  resolvedTheme === "dark" ? style.dark_brand_box_left_btns_btn1 : ""
                }`}
              />
            </Link>
            <Link href="/search" passHref>
              <Button
                btnName={"Discover more"}
                className={`${style.brand_box_left_btns_btn2} ${
                  resolvedTheme === "dark" ? style.dark_brand_box_left_btns_btn2 : ""
                }`}
              />
            </Link>
          </div>
        </div>
        <div className={style.brand_box_right}>
          <Image
            src={images.brand}
            width={300}
            height={350}
            alt="mine crypto with cryptix"
            placeholder="blur"
            className={style.brand_box_right_img}
            quality={90}
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
