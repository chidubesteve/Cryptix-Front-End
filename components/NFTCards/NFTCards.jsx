import React, { useCallback, useState } from "react";
import { BsCameraVideo } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import Image from "next/image";
import { useTheme } from "next-themes";

// internal imports
import style from "./NFTCards.module.css";
import images from "../../images";
import { Like } from "../ComponentIndex";
const NFTCards = () => {
  const [idNumber, setIdNumber] = useState(0);
  const { resolvedTheme } = useTheme();

  const NFTCardsDemoData = [
    {
      id: 1,
      name: "CloneF #1291",
      nftImage: images.clonef_1291,
      inStock: 25,
      likes: 24,
    },
    {
      id: 2,
      name: "CloneF #1324",
      nftImage: images.clonef_1324,
      inStock: 103,
      likes: 24,
    },
    {
      id: 3,
      name: "CloneF #1175",
      nftImage: images.clonef_1175,
      inStock: 45,
      likes: 24,
    },
    {
      id: 4,
      name: "CloneF #1192",
      nftImage: images.clonef_1192,
      inStock: 88,
      likes: 24,
    },
    {
      id: 5,
      name: "CloneF #1923",
      nftImage: images.clonef_1923,
      inStock: 32,
      likes: 24,
    },
    {
      id: 6,
      name: "CloneF #1778",
      nftImage: images.clonef_1778,
      inStock: 44,
      likes: 24,
    },
    {
      id: 7,
      name: "CloneF #1184",
      nftImage: images.clonef_1192,
      inStock: 88,
      likes: 24,
    },
    {
      id: 8,
      name: "CloneF #1136",
      nftImage: images.clonef_1291,
      inStock: 55,
      likes: 24,
    },
    {
      id: 9,
      name: "CloneF #1136",
      nftImage: images.clonef_1324,
      inStock: 88,
      likes: 24,
    },
  ];
  const [like, setLike] = useState(NFTCardsDemoData.map((nft) => nft.likes));
  const [likedStatus, setLikedStatus] = useState(
    NFTCardsDemoData.map(() => false)
  );

  // like/unlike nft function and increase/decrease likes count
  const handleLike = useCallback(
    (index) => {
      const newLikes = [...like];
      const newLikedStatus = [...likedStatus];
      if (newLikedStatus[index]) {
        newLikes[index] -= 1;
      } else {
        newLikes[index] += 1;
      }
      newLikedStatus[index] = !newLikedStatus[index];
      setLike(newLikes);
      setLikedStatus(newLikedStatus);
    },
    [likedStatus, like]
  );
  return (
    <div className={style.NFTCard}>
      {NFTCardsDemoData.map((nft, i) => (
        <div
          className={`${style.NFTCard_box} ${
            resolvedTheme === "dark" ? style.dark_NFTCard_box : ""
          }`}
          key={nft.id}
        >
          <div className={style.NFTCard_box_img}>
            <Image
              src={nft.nftImage}
              alt={`${nft.name} NFT`}
              width={600}
              height={600}
              className={style.NFTCard_box_img_img}
              placeholder="blur"
            />
          </div>

          <div className={style.NFTCard_box_update}>
            <div className={style.NFTCard_box_update_left}>
              <Like
                isLiked={likedStatus[i]}
                noOfLikes={like[i]}
                handleClick={() => handleLike(i)}
                className={style.like_style}
                customStyle={{ top: "1rem", left: "1rem" }}
              />
              <div className={style.NFTCard_box_likedBy_Avatars}>
                <div className={style.NFTCard_box_likedBy_Avatars_avatar}>
                  <Image
                    src={images.user4}
                    alt="this user liked this NFT"
                    width={40}
                    height={40}
                    className={style.NFTCard_box_likedBy_Avatars_avatar_img}
                  />
                </div>
                <div className={style.NFTCard_box_likedBy_Avatars_avatar}>
                  <Image
                    src={images.user5}
                    alt="this user liked this NFT"
                    width={40}
                    height={40}
                    className={style.NFTCard_box_likedBy_Avatars_avatar_img}
                  />
                </div>
                <div className={style.NFTCard_box_likedBy_Avatars_avatar}>
                  <Image
                    src={images.user6}
                    alt="this user liked this NFT"
                    width={40}
                    height={40}
                    className={style.NFTCard_box_likedBy_Avatars_avatar_img}
                  />
                </div>
              </div>
            </div>

            <div className={style.NFTCard_box_update_right}>
              <div className={style.NFTCard_box_update_right_info}>
                <small>Remaining time</small>
                <h4>3h : 15m : 25s</h4>
              </div>
            </div>
          </div>

          <div className={style.NFTCard_box_update_details}>
            <div className={style.NFTCard_box_update_details_box}>
              <div className={style.NFTCard_box_update_details_name}>
                <h4>{nft.name}</h4>
                <div className={style.NFTCard_box_update_details_price_box}>
                  <div
                    className={style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Price</small>
                    <p>1.000 ETH</p>
                  </div>
                  <div
                    className={style.NFTCard_box_update_details_price_box_stock}
                  >
                    <small>{nft.inStock} in stock</small>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.NFTCard_box_update_details_nftType}>
              <IoImageOutline
                style={{
                  textAlign: "center",
                  width: "55%",
                }}
                size={20}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCards;
