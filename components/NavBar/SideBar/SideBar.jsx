import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

// Internal import
import style from "./SideBar.module.css";
import images from "../../../images";
import Button from "../../Button/Button";
import { discover, helpCenter } from "../NavMenus";

const SideBar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };
  return (
    <div className={style.sideBar}>
      <GrClose
        className={style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />

      <div className={style.sideBar_box}>
        <Image src={images.logo} alt="Cryptix logo" width={150} height={150} />
        <p>
          Discover the most outstanding articles on all you need to know about
          NFTs
        </p>
        <div className={style.sideBar_social}>
          <a href="https://twitter.com/PhoenixWeb3Dev">
            <TiSocialTwitter />
          </a>
          <a href="https://github.com/chidubesteve">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/chidube-anike">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className={style.sideBar_menu}>
        <div>
          <div
            className={style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className={style.sideBar_discover}>
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div
            className={style.sideBar_menu_box}
            onClick={() => openHelpMenu()}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={style.sideBar_discover}>
              {helpCenter.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={style.sideBar_button}>
        <Button btnName="Create" />
        <Button btnName="Connect Wallet" />
      </div>
    </div>
  );
};

export default SideBar;
