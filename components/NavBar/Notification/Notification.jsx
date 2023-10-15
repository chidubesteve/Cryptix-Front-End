import React from "react";
import Image from "next/image";

// Internal imports
import images from "../../../images";
import Style from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notifications</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            src={images.user1}
            alt="Profile image"
            width={40}
            height={40}
            className={Style.notification_box_img}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Bob Stone</h4>
          <p>#0x123456...7890123</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
