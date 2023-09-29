import Image from "next/image";
import React from "react";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";

// Internal imports
import style from "./Profile.module.css";
import images from "../../../images";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.profile_account}>
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className={style.profile_account_img}
        />
        <div className={style.profile_account_info}>
          <p>Robert Clark</p>
          <small>0xbd8393yde...ugf389439834hr</small>
        </div>
      </div>
      <div className={style.profile_menu}>
        <div className={style.profile_menu_one}>
          <div className={style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <link href={{ pathname: "/myprofile" }}>My Profile</link>
            </p>
          </div>
          <div className={style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <link href={{ pathname: "/my-items" }}>My Items</link>
            </p>
          </div>
          <div className={style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <link href={{pathname: '/edit-profile'}}>Edit Profile</link>
            </p>
          </div>
        </div>

        <div className={style.profile_menu_two}>
          <div className={style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <link href={{ pathname: "/help" }}>Help</link>
            </p>
          </div>
          <div className={style.profile_menu_one_item}>
            <TbDownload/>
            <p>
              <link href={{ pathname: "/disconnect" }}>Disconnect</link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
