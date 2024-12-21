import React, { useRef } from "react";
import Image from "next/image";

//INTERNAL IMPORTS
import style from "./CollectionTabs.module.css";
import images from "../../../images";
import VerifiedSvg from "../../../utils/verified";

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
                  <VerifiedSvg />
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
