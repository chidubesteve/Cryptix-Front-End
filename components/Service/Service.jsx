import React from "react";
import Image from "next/image";

// internal imports
import images from "../../images";
import style from "./Service.module.css";

const Service = () => {
  return (
    <div className={style.service}>
      <div className={style.service_box}>
        <div className={style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter and discover"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <p className={style.service_box_item_step}>
            <span
              style={{
                backgroundColor: "var(--highlight-blue-bg-color)",
                color: "var(--highlight-blue-text-color)",
              }}
            >
              Step 1
            </span>
          </p>
          <h3>Filter & Discover</h3>
          <p>Discover, filer and find NFTs you love.</p>
        </div>
        <div className={style.service_box_item}>
          <Image
            src={images.service2}
            alt="Connect Wallet"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <p className={style.service_box_item_step}>
            <span
              style={{
                backgroundColor: "var(--highlight-red-bg-color)",
                color: "var(--highlight-red-text-color)",
              }}
            >
              Step 2
            </span>
          </p>
          <h3>Connect Wallet</h3>
          <p>Connect your wallet, to buy NFTs</p>
        </div>

        <div className={style.service_box_item}>
          <Image
            src={images.service3}
            alt="Start Trading"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <p className={style.service_box_item_step}>
            <span
              style={{
                backgroundColor: "var(--highlight-green-bg-color)",
                color: "var(--highlight-green-text-color)",
              }}
            >
              Step 3
            </span>
          </p>
          <h3>Start Trading</h3>
          <p>Buy, sell, or resell NFTs and earn money.</p>
        </div>
        <div className={style.service_box_item}>
          <Image
            src={images.service4}
            alt="Earn Tokens"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <p className={style.service_box_item_step}>
            <span
              style={{
                backgroundColor: "var(--highlight-yellow-bg-color)",
                color: "var(--highlight-yellow-text-color)",
              }}
            >
              Step 4
            </span>
          </p>
          <h3>Earn Money</h3>
          <p>
            Connect wallet, discover, buy NFTs, sell your NFTs and earn money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
