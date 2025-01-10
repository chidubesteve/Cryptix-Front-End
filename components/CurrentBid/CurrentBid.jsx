import React from 'react'

// internal imports
import style from "./CurrentBid.module.css";

const CurrentBid = ({price}) => {
  return (
    <div className={style.currentBid}>
      <small>Current Bid</small>
      <p>
        {price} ETH<span>(≈ $3,112.50)</span>
      </p>
    </div>
  );
}
// bigNftSlider_box_left_bidding_box

export default CurrentBid