import React, { useState } from 'react';
import { TbFilterSearch } from 'react-icons/tb';
import { FaAngleDown, FaAngleUp, FaRegUser } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import { IoImagesOutline, IoCloseCircle } from 'react-icons/io5';
import { BsWallet2 } from 'react-icons/bs';
import { LuFiles } from 'react-icons/lu';
import { BiSort } from 'react-icons/bi';
import { TiTick } from 'react-icons/ti';

//internal imports
import style from './Filter.module.css';
import { Title } from '../ComponentIndex';
import { Dropdown } from '../ComponentIndex';
const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [activeButton, setActiveButton] = useState('');

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

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  //arrays
  const fileTypeArrayNames = ['Image', 'Video', 'Music'];

  const salesTypeArrayNames = ['Buy Now', 'On Auction', 'New', 'Has Offers'];

  const sortOrderArrayNames = [
    'Price: Low - High',
    'Price: High - Low',
    'Newest',
    'Oldest',
    'Most favourited',
  ];
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
          {['All NFTs', 'Arts', 'Music', 'Sports', 'Photography'].map(
            (name) => (
              <button
                key={name}
                className={activeButton === name ? style.activeButton : ''}
                onClick={() => {
                  handleButtonClick(name);
                  console.log('clicked');
                }}
              >
                {name}{' '}
              </button>
            )
          )}
        </div>
        <div className={style.filter_box_right}>
          <button className={style.filter_box_right_box} onClick={openFilter}>
            <TbFilterSearch className={style.filter_box_right_box_icon} />
            <span>Filter</span> &nbsp;
            {filter ? <FaAngleDown /> : <FaAngleUp />}
          </button>
        </div>
      </div>
      {filter && (
        <div className={style.filter_box_items}>
          <div className={style.filter_box_items_box}>
            <div className={style.filter_box_items_box_item} tabIndex={0}>
              <BsWallet2 /> <span>0.1 ETH - 10 ETH</span>
              <IoCloseCircle />
            </div>
          </div>

          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_transaction}
              onClick={openImage} tabIndex={0}
            >
              <IoImagesOutline /> <span>Images</span>{' '}
              {image ? <IoCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_transaction}
              onClick={openVideo} tabIndex={0}
            >
              <LuFiles /> <span>File types</span>{' '}
              {video ? <IoCloseCircle /> : <TiTick />}
            </div>
            <Dropdown inputType={'checkbox'} children={fileTypeArrayNames} />
          </div>

          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_transaction}
              onClick={openMusic} tabIndex={0}
            >
              <BiSort /> <span>Sort order</span>{' '}
              {music ? <IoCloseCircle /> : <TiTick />}
            </div>
            <Dropdown inputType={'radio'} children={sortOrderArrayNames} />
          </div>

          <div className={style.filter_box_items_box}>
            <div className={style.filter_box_items_box_item} tabIndex={0}>
              <FaRegUser /> <span>Verified creators</span>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
