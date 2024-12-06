import React from "react";
import Image from "next/future/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { CiExport } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { useTheme } from "next-themes";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import Banner from "../components/Banner/Banner";
import images from "../images";
import NFTCards from "../components/NFTCards/NFTCards";
import Filters from "../components/Filter/Filters/Filters";
import Link from "next/link";

const collection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className={Style.collection}>
      <div className={Style.collection_box}>
        <Banner bannerImg={images.creatorbackground10} />
        <div className={Style.collection_box_collection_profile_box}>
          <div
            className={`${Style.collection_box_collection_profile_box_box} ${
              resolvedTheme === "dark"
                ? Style.collection_box_collection_profile_box_box_dark_theme
                : ""
            }`}
          >
            <div
              className={
                Style.collection_box_collection_profile_box_box_nft_box
              }
            >
              <div
                className={
                  Style.collection_box_collection_profile_box_box_nft_box_img
                }
              >
                <Image
                  src={images.clonef_1175}
                  alt="nft collection main image"
                  width={400}
                  height={400}
                  placeholder="blur"
                  className={
                    Style.collection_box_collection_profile_box_box_nft_box_img_img
                  }
                />
              </div>
              <div
                className={
                  Style.collection_box_collection_profile_box_box_nft_box_socials_box
                }
              >
                <div>
                  <button
                    className={`${Style.socials_icon} ${
                      resolvedTheme === "dark" ? Style.dark_socials_icon : ""
                    }`}
                  >
                    <Link href="#">
                      <FaFacebook />
                    </Link>
                  </button>
                  <button
                    className={`${Style.socials_icon} ${
                      resolvedTheme === "dark" ? Style.dark_socials_icon : ""
                    }`}
                  >
                    <Link href="#">
                      <FaXTwitter />
                    </Link>
                  </button>
                </div>
                <div
                  className={`${
                    Style.collection_box_collection_profile_box_box_nft_box_socials_box_line
                  } ${
                    resolvedTheme === "dark"
                      ? Style.dark_collection_box_collection_profile_box_box_nft_box_socials_box_line
                      : ""
                  }`}
                ></div>
                <div>
                  <button
                    className={`${Style.socials_icon} ${
                      resolvedTheme === "dark" ? Style.dark_socials_icon : ""
                    }`}
                  >
                    <CiExport />
                  </button>

                  <button
                    className={`${Style.socials_icon} ${
                      resolvedTheme === "dark" ? Style.dark_socials_icon : ""
                    }`}
                  >
                    <BsThreeDots />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                Style.collection_box_collection_profile_box_box_collection_info
              }
            >
              <div
                className={
                  Style.collection_box_collection_profile_box_box_collection_info_name_details
                }
              >
                <h2>Awesome Collections NFT Name</h2>
                <span>
                  Karafuru is home to 5,555 generative arts where colors reign
                  supreme. Leave the drab reality and enter the world of
                  Karafuru by Museum of Toys.
                </span>
              </div>
              <div
                className={
                  `${Style.collection_box_collection_profile_box_box_collection_info_stats_grid
                } ${
                    resolvedTheme === "dark"
                      ? Style.dark_collection_box_collection_profile_box_box_collection_info_stats_grid
                      : ""}`}
              >
                <div
                  className={
                    Style.collection_box_collection_profile_box_box_collection_info_stats_grid_box1
                  }
                >
                  <span>Floor price</span>
                  <h4>$295,481.62</h4>
                  <small style={{color: "green"}}>+2.11%</small>
                </div>
                <div
                  className={
                    Style.collection_box_collection_profile_box_box_collection_info_stats_grid_box2}
                >
                  <span>Items</span>
                  <h4>$107,537.50</h4>
                  <small>0.00%</small>
                </div>
                <div className={Style.collection_box_collection_profile_box_box_collection_info_stats_grid_box3}>
                  <span>Volume</span>
                  <h4>$1,000,000</h4>
                  <small>total</small>
                </div>
                <div className={Style.collection_box_collection_profile_box_box_collection_info_stats_grid_box4}>
                  <span>Owners</span>
                  <h4>4,000</h4>
                  <small>total</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop: "14rem"}}>
        <Filters />
        <NFTCards />
      </div>
    </div>
  );
};

export default collection;
