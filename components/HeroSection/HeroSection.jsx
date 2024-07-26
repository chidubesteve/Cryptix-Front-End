import React from 'react';
import Image from 'next/image';
import { LuPencilLine } from 'react-icons/lu';
import { IoIosSearch } from 'react-icons/io';

// Internal Imports
import style from './HeroSection.module.css';
import { Button } from '../ComponentIndex';
import images from '../../images';

function HeroSection() {
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
            <Button
              btnName="Explore"
              icon={<IoIosSearch className={style.btnIcon} />}
              className={style.btn1}
            />
            <Button
              btnName="Create"
              icon={<LuPencilLine className={style.btnIcon} />}
              className={style.btn}
            />
          </div>
        </div>
        <div className={style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Three column nfts"
            width={900}
            height={500}
            style={{width: 'auto', height: 'auto'}}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
