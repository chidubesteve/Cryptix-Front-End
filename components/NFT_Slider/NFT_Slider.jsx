import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/future/image';
import { AiFillFire, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsCameraVideo } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import { LuTimer } from 'react-icons/lu';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

//internal imports
import style from './NFT_Slider.module.css';
import images from '../../images';
import { Button } from '../ComponentIndex';

const NFTSliderData = [
  {
    title: 'BearX #3636',
    id: 1,
    name: 'John Doe',
    collection: 'virtual Worlds',
    price: '1.00 ETH',
    likes: 256,
    image: images.user1,
    nftImage: images.nft_image_1,
    time: {
      days: 23,
      hours: 5,
      minutes: 32,
      seconds: 5,
    },
  },
  {
    title: 'Wolf Face #1', //
    id: 2,
    name: 'Jane Doe',
    collection: 'nature',
    price: '0.25 ETH',
    likes: 136,
    image: images.user2,
    nftImage: images.nft_image_2,
    time: {
      days: 27,
      hours: 10,
      minutes: 22,
      seconds: 17,
    },
  },
  {
    title: 'Wolf Face #2"',
    id: 3,
    name: 'Alexa Dean',
    collection: 'nature',
    price: '0.060 ETH',
    likes: 99,
    image: images.user3,
    nftImage: images.nft_image_3,
    time: {
      days: 7,
      hours: 10,
      minutes: 12,
      seconds: 8,
    },
  },
  {
    title: 'Bow Tie NFT',
    id: 4,
    name: 'Jada amin',
    collection: 'aesthetic',
    price: '0.098756 ETH',
    likes: 409,
    image: images.user4,
    nftImage: images.nft_image_4,
    time: {
      days: 7,
      hours: 19,
      minutes: 56,
      seconds: 21,
    },
  },
  {
    title: 'Cartoon Art',
    id: 5,
    name: 'Mike Wilson',
    collection: 'aesthetic',
    price: '1.00 ETH',
    likes: 23,
    image: images.user5,
    nftImage: images.nft_image_5,
    time: {
      days: 13,
      hours: 23,
      minutes: 36,
      seconds: 45,
    },
  },
  {
    title: 'Rebels #3301',
    id: 6,
    name: 'Dreamer',
    collection: 'aesthetic',
    price: '0.005 ETH',
    likes: 12,
    image: images.user6,
    nftImage: images.nft_image_6,
    time: {
      days: 10,
      hours: 13,
      minutes: 36,
      seconds: 15,
    },
  },
];

const NFT_Slider = () => {
  const [idNumber, setIdNumber] = useState(0);

  const [likes, setLikes] = useState(NFTSliderData.map((nft) => nft.likes));
  const [likedStatus, setLikedStatus] = useState(
    NFTSliderData.map(() => false)
  );

  const handleNext = useCallback(() => {
    setIdNumber((prevIdNumber) =>
      prevIdNumber === NFTSliderData.length - 1 ? 0 : prevIdNumber + 1
    );
  }, [NFTSliderData.length]);

  const handlePrev = useCallback(() => {
    setIdNumber((prevIdNumber) =>
      prevIdNumber === 0 ? NFTSliderData.length - 1 : prevIdNumber - 1
    );
  }, [NFTSliderData.length]);

  // like nft function and increase likes count
  const handleLike = useCallback(() => {
    const newLikes = [...likes];
    const newLikedStatus = [...likedStatus];
    if (newLikedStatus[idNumber]) {
      newLikes[idNumber] -= 1;
    } else {
      newLikes[idNumber] += 1;
    }
    newLikedStatus[idNumber] = !newLikedStatus[idNumber];
    setLikes(newLikes);
    setLikedStatus(newLikedStatus);
  }, [likedStatus, idNumber, likes]);

  return (
    <div className={style.bigNftSlider}>
      <div className={style.bigNftSlider_box}>
        <div className={style.bigNftSlider_box_left}>
          <h2>{NFTSliderData[idNumber].title}</h2>
          <div className={style.bigNftSlider_box_left_creator}>
            <div className={style.bigNftSlider_box_left_creator_profile}>
              <Image
                className={style.bigNftSlider_box_left_creator_profile_img}
                src={NFTSliderData[idNumber].image}
                alt="NFT creator's image"
                width={50}
                height={50}
              />
              <div className={style.bigNftSlider_box_left_creator_profile_text}>
                <p>Creator</p>
                <h4>
                  {NFTSliderData[idNumber].name}{' '}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div
              className={style.bigNftSlider_box_left_creator_profile_collection}
            >
              <AiFillFire
                className={
                  style.bigNftSlider_box_left_creator_profile_collection_icon
                }
              />
              <div
                className={
                  style.bigNftSlider_box_left_creator_profile_collection_info
                }
              >
                <p>Collection</p>
                <h4>{NFTSliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={style.bigNftSlider_box_left_bidding}>
            <div className={style.bigNftSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {NFTSliderData[idNumber].price} <span>(≈ $3,112.50)</span>
              </p>
            </div>
            <p className={style.bigNftSlider_box_left_bidding_box_auction}>
              <LuTimer
                className={
                  style.bigNftSlider_box_left_bidding_box_auction_timerIcon
                }     
              />
              <span>Auction ending in:</span>
            </p>
            <div className={style.bigNftSlider_box_left_bidding_box_timer}>
              <div
                className={style.bigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{NFTSliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className={style.bigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{NFTSliderData[idNumber].time.hours}</p>
                <span>hours</span>
              </div>

              <div
                className={style.bigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{NFTSliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={style.bigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{NFTSliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={style.bigNftSlider_box_left_buttons_box}>
              <Button
                btnName="Place a bid"
                handleClick={() => {}}
                className={style.place_bid_btn}
              />
              <Button
                btnName="View item"
                handleClick={() => {}}
                className={style.view_item_btn}
              />
            </div>
          </div>
        </div>
        {/* navigation arrows */}
        <div className={style.bigNftSlider_box_left_buttons}>
          <span>
            <HiArrowLeft
              className={style.bigNftSlider_box_left_buttons_prevIcon}
              onClick={handlePrev}
            />
          </span>
          <span>
            <HiArrowRight
              className={style.bigNftSlider_box_left_buttons_nextIcon}
              onClick={handleNext}
            />
          </span>
        </div>

        <div className={style.bigNftSlider_box_right}>
          <div className={style.bigNftSlider_box_right_box}>
            <Image
              src={NFTSliderData[idNumber].nftImage}
              alt={`${NFTSliderData[idNumber].title} nft image}`}
              className={style.bigNftSlider_box_right_box_nftImage}
            />

            <div className={style.bigNftSlider_box_right_box_like}>
              {likedStatus[idNumber] ? (
                <AiFillHeart
                  className={style.bigNftSlider_box_right_box_like_icon}
                  fill="red"
                  onClick={handleLike}
                />
              ) : (
                <AiOutlineHeart
                  className={style.bigNftSlider_box_right_box_like_icon}
                  onClick={handleLike}
                />
              )}
              <span>{likes[idNumber]}</span>
            </div>
            <div className={style.bigNftSlider_box_right_box_view}>
              <BsCameraVideo
                className={style.bigNftSlider_box_right_box_view_icon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFT_Slider;
