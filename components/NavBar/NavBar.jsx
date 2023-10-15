import React, { useState } from "react";
import Image from "next/image";

// Import icons
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import {  CgMenuRight } from "react-icons/cg";

// internal imports
import styles from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../ComponentIndex";
import images from "../../images";

const NavBar = () => {
  // ----USESTATE
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
      setProfile(false);
      setNotification(false)
    } else {
      setOpenSideMenu(false);
      setProfile(true);
      setNotification(true)
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_container_left}>
          <div className={styles.logo}>
            <Image
              src={images.logo}
              alt="NFT Marketplace logo"
              width={135}
              height={125}
            />
          </div>
          <div className={styles.navbar_container_left_box_input}>
            <div className={styles.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFTs..." />
              <BsSearch onClick={() => {}} className={styles.search_icon} />
            </div>
          </div>
        </div>

        {/* END OF LEFT SECTION */}
        <div className={styles.navbar_container_right}>
          <div className={styles.navbar_container_right_discover}>
            {/* DISCOVER MENU */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={styles.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* HELP CENTER */}
          <div className={styles.navbar_container_right_help}>
      <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={styles.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div className={styles.navbar_container_right_notify}>
            <MdNotifications
              className={styles.notify}
              onClick={() => openNotification()}
              size={25}
            />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={styles.navbar_container_right_button}>
            <Button btnName="Create" handleClick={() => {}}/>
          </div>

          {/* USER PROFILE */}
          <div className={styles.navbar_container_right_profile_box}>
            <div className={styles.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={50}
                height={50}
                objectFit="center"
                onClick={() => openProfile()}
                className={styles.navbar_container_right_profile}
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* MENU BUTTON */}
          <div className={styles.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={styles.menuIcon}
              onClick={() => openSideBar()}
              size={25}
            />
          </div>
        </div>
      </div>

      {/* SIDEBAR COMPONENT*/}
      {openSideMenu && (
        <div className={styles.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
