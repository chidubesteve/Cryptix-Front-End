import Image from "next/image";
import React from "react";

import {
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiArrowSortedDown,
} from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import images from "../../images";
import { Discover, HelpCenter } from "../NavBar/index";

// INTERNAL IMPORTS
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_box}>
        <div className={style.footer_box_social}>
          <Image src={images.logo} alt="footer logo" height={125} width={135} />
          <p>
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible token (NFTs). Buy, sell, and discover
            exclusive digital items
          </p>

          <div className={style.footer_social}>
            <a href="https://twitter.com/PhoenixWeb3Dev">
              <FaXTwitter />
            </a>
            <a href="https://github.com/chidubesteve">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/chidube-anike">
              <TiSocialLinkedin />
            </a>
            <a href="https://instagram.com/phoenixdevhub">
              <TiSocialInstagram />
            </a>
            <a href="https://direct.me/phoenixtech/">
              <TbWorld />
            </a>
            <a href="https://youtube.com/@web3phoenix">
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className={style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className={style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={style.subscribe}>
          <h3>Subscribe</h3>
          <div className={style.subscribe_box}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={style.subscribe_box_send} />
          </div>
          <div className={style.subscribe_box_info}>
            <p>
              Discover, collect, and sell extraordinary NFTs Cryptix is the
              first and largest NFT Marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
