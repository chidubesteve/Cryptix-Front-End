import React from 'react'

// internal imports
import style from "./AuctionTimer.module.css";
import { LuTimer } from "react-icons/lu";

const AuctionTimer = ({days, hours, minutes, seconds}) => {
  return (
    <div>
      {" "}
      <p className={style.auction}>
        <LuTimer
          className={style.auction_timerIcon}
        />
        <span>Auction ending in:</span>
      </p>
      <div className={style.auctionTimer_box}>
        <div className={style.auctionTimer_box_item}>
          <p>{days}</p>
          <span>Days</span>
        </div>

        <div className={style.auctionTimer_box_item}>
          <p>{hours}</p>
          <span>hours</span>
        </div>

        <div className={style.auctionTimer_box_item}>
          <p>{minutes}</p>
          <span>mins</span>
        </div>

        <div className={style.auctionTimer_box_item}>
          <p>{seconds}</p>
          <span>secs</span>
        </div>
      </div>
    </div>
  );
}

export default AuctionTimer