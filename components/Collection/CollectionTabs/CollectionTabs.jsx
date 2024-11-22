import React, { useRef } from "react";
import Image from "next/future/image";

//INTERNAL IMPORTS
import style from "./CollectionTabs.module.css";
import images from "../../../images";

const CollectionTabs = () => {
  const collectionRef = useRef(null);

  return (
    <div
      className={style.collectionTabs}
      style={{
        backgroundImage: `url(${images.creatorbackground5.src})`,
      }}
      ref={collectionRef}
    >
      <div className={style.collectionTabs_box_grid_img}>
        <div className={style.collectionTabs_box_grid_img_base}>
          <div className={style.collectionTabs_box_grid_info}>
            <div className={style.collectionTabs_box_grid_info_profile}>
              <Image
                src={images.user5}
                alt="profile"
                width={40}
                height={40}
                className={style.collectionTabs_box_grid_info_profile_img}
                placeholder="blur"
              />
              <p className={style.collectionTabs_box_grid_info_profile_artist}>
                by <span style={{ fontWeight: "500" }}>&nbsp; Mike Okpala</span>
                <span style={{ marginLeft: ".25rem" }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    color="#38BDF8"
                    style={{ color: "#38BDF8" }}
                    height="17"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12z"></path>
                    {/* <!-- Checkmark path with white fill --> */}
                    <path
                      d="M10.09 16.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </span>
              </p>
            </div>
            <h2 className={style.collectionTabs_box_grid_info_title}>
              Amazing Collection
            </h2>
          </div>
          <div className={style.collectionTabs_box_grid_img_base_imgs}>
            <div>
              <Image
                src={images.creatorbackground2}
                alt="collection"
                width={200}
                height={200}
                className={style.collectionTabs_box_grid_img_img2}
                placeholder="blur"
              />
            </div>
            <div>
              <Image
                src={images.creatorbackground3}
                alt="collection"
                width={200}
                height={200}
                className={style.collectionTabs_box_grid_img_img3}
                placeholder="blur"
              />
            </div>
            <div>
              <Image
                src={images.creatorbackground4}
                alt="collection"
                width={200}
                height={200}
                className={style.collectionTabs_box_grid_img_img4}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionTabs;
