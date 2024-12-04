import React from "react";
import Image from "next/image";
import { LuPencilLine } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { useTheme } from "next-themes";

// Internal Imports
import style from "./HeroSection.module.css";
import { Button } from "../ComponentIndex";
import images from "../../images";

function HeroSection() {
  const { resolvedTheme } = useTheme();
  return (
    <div className={style.heroSection}>
      <div className={style.heroSection_box}>
        <div className={style.heroSection_box_left}>
          <h1>
            Discover,
            <br /> collect, and sell extraordinary NFTs
          </h1>
          <p>
            Discover the most outstanding NFTs in all topics of life. Create
            your NFTs and sell them
          </p>

          <div className={style.btnsContainer}>
            <Link href="/search" passHref>
              <Button
                btnName="Explore"
                icon={<IoIosSearch className={style.btnIcon} />}
                className={`${style.btn1} ${resolvedTheme === "dark" && style.darkBtn1}`}
              />
            </Link>
            <Link href="/create-item" passHref>
              <Button
                btnName="Create"
                icon={<LuPencilLine className={style.btnIcon} />}
                className={`${style.btn} ${resolvedTheme === "dark" && style.darkBtn}`}
              />
            </Link>
          </div>
        </div>
        <div className={style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Three column nfts"
            width={900}
            height={500}
            style={{ width: "auto", height: "auto" }}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
