import React, { useState } from 'react';
import { TbFilterSearch } from 'react-icons/tb';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { FaAngleDown, FaAngleUp, FaRegUser } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import {
  IoImagesOutline,
  IoCloseCircle,
} from 'react-icons/io5';
import { BsWallet2 } from "react-icons/bs";
import { LuMusic } from 'react-icons/lu';
import { TiTick } from 'react-icons/ti';

//internal imports
import style from './Filter.module.css';
import { Title } from '../ComponentIndex';
const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  //functions
  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const openImage = () => {
    if (!image) {
      setImage(true);
    } else {
      setImage(false);
    }
  };

  const openVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };

  const openMusic = () => {
    if (!music) {
      setMusic(true);
    } else {
      setMusic(false);
    }
  };

  return (
    <div className={style.filter}>
      <div className={style.filter_box_title}>
        {' '}
        <Title
          title="Featured NFTs"
          paragraph="Discover the most outstanding NFts in all topics of life."
        />{' '}
      </div>
      <div className={style.filter_box}>
        <div className={style.filter_box_left}>
          <button onclick={() => {}}>All NFTs</button>
          <button onclick={() => {}}>Arts</button>
          <button onclick={() => {}}>Music</button>
          <button onclick={() => {}}>Sports</button>
          <button onclick={() => {}}>Photography</button>
        </div>
        <div className={style.filter_box_right}>
          <div className={style.filter_box_right_box} onClick={openFilter}>
            <TbFilterSearch className={style.filter_box_right_box_icon} />
            <span>Filter</span> &nbsp;
            {filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>
      {filter && (
        <div className={style.filter_box_items}>
          <div className={style.filter_box_items_box}>
            <div className={style.filter_box_items_box_item}>
              <BsWallet2 /> <span>0.1 ETH - 10 ETH</span>
              <IoCloseCircle />
            </div>
          </div>

          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_transaction}
              onClick={openImage}
            >
              <IoImagesOutline /> <span>Images</span>{' '}
              {image ? <IoCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_transaction}
              onClick={openVideo}
            >
              <MdOutlineVideoLibrary /> <span>Videos</span>{' '}
              {video ? <IoCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_transaction}
              onClick={openMusic}
            >
              <LuMusic /> <span>Music</span>{' '}
              {music ? <IoCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className={style.filter_box_items_box}>
            <div className={style.filter_box_items_box_item}>
              <FaRegUser /> <span>Verified Creators</span>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
