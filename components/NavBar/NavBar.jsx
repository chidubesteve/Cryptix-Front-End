import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Import icons
import { HiOutlineBell } from "react-icons/hi2";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTheme } from "next-themes";

// internal imports
import styles from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../ComponentIndex";
import images from "../../images";
import useCloseOnOutsideClick from "../../hooks/useCloseOnOutsideClick";
import Link from "next/link";

const NavBar = () => {
  // ----USESTATE
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);


  const discoverRef = useRef(null);
  const notificationRef = useRef(null);
  const helpRef = useRef(null);

  const openMenu = (menu) => {
    if (menu === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (menu === "Help Center") {
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
      setOpenSideMenu(false);
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
      setOpenSideMenu(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
      setProfile(false);
      setNotification(false);
    } else {
      setOpenSideMenu(false);
    }
  };

  useCloseOnOutsideClick(
    [discoverRef, notificationRef, helpRef],
    [setDiscover, setNotification, setHelp]
  );

  return (
      <div className={styles.navbar_container}>
        <div className={styles.navbar_container_left}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src={theme === "light" ? images.logo : images.logoLight}
                alt="NFT Marketplace logo"
                width={135}
                height={125}
              />
            </Link>
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
          <div
            className={styles.navbar_container_right_discover}
            ref={discoverRef}
          >
            {/* DISCOVER MENU */}
            <p
              data-menu="Discover"
              onClick={() => openMenu("Discover")}
              style={{ margin: 0 }}
            >
              Discover
              <MdOutlineKeyboardArrowDown
                size={30}
                style={{
                  color: "rgba(128, 128, 128, 0.418)",
                  width: "fit-content",
                }}
              />
            </p>
            {discover && (
            <div className={`${styles.navbar_container_right_discover_box} ${theme === "dark" ? styles.dark_navbar_container_right_discover_box : ""}`}>
                <Discover setDiscover={setDiscover} />
              </div>
            )}
          </div>
          {/* HELP CENTER */}
          <div className={styles.navbar_container_right_help} ref={helpRef}>
            <p
              data-menu="Help Center"
              onClick={() => openMenu("Help Center")}
              style={{ margin: 0 }}
            >
              Help Center
              <MdOutlineKeyboardArrowDown
                size={30}
                style={{
                  color: "rgba(128, 128, 128, 0.418)",
                  width: "fit-content",
                }}
              />
            </p>
            {help && (
              <div className={`${styles.navbar_container_right_help_box} ${theme === "dark" ? styles.dark_navbar_container_right_help_box : ""}`}>
                <HelpCenter setHelpCenter={setHelp} />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div
            className={styles.navbar_container_right_notify}
            ref={notificationRef}
          >
            <HiOutlineBell
              className={styles.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>
          <div className={styles.verticalBar}></div>
          {
            // Prevent rendering during SSR
            !mounted ? null : (
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle Theme"
                className={styles.themeSwitcher}
              >
                {theme === "dark" ? (
                  <FaMoon
                    className={styles.themeIcon}
                    title="switch to light mode"
                  />
                ) : (
                  <FiSun
                    className={styles.themeIcon}
                    title="switch to dark mode"
                  />
                )}
              </button>
            )
          }
          {/* CREATE & CONNECT WALLET BUTTON SECTION */}
          <div className={styles.navbar_container_right_button}>
            <Button btnName="Create" handleClick={() => {}} className={theme === "dark" && styles.createBtn}/>
            <Button
              btnName="Connect Wallet"
              handleClick={() => {}}
              className={`${styles.connectWalletBtn } ${theme === "dark" && styles.darkConnectWalletBtn}`}
            />
          </div>

          {/* USER PROFILE */}
          {/* <div className={styles.navbar_container_right_profile_box}>
            <div className={styles.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                objectFit="center"
                onClick={() => openProfile()}
                className={styles.navbar_container_right_profile}
              />

              {profile && <Profile />}
            </div>
          </div> */}

          {/* MENU BUTTON */}
          <div className={styles.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={styles.menuIcon}
              onClick={() => openSideBar()}
              size={25}
            />
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
