import React, { useState } from "react";
import { useTheme } from "next-themes";

// internal imports
import style from "./CreatorCard.module.css";
import Image from "next/image";
import VerifiedSvg from "../../../utils/verified";

const CreatorCard = ({ creatorPic, backgroundImage }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <div className={style.creatorCard}>
      <div
        className={`${style.creatorCard_box} ${
          resolvedTheme === "dark" && style.dark_creatorCard_box
        }`}
      >
        <div className={style.creatorCard_box_img_box}>
          <div className={style.creatorCard_box_img}>
            <Image
              src={backgroundImage}
              alt="creator background"
              width={300}
              height={98}
              className={style.creatorCard_box_img_img}
              placeholder="data:image/..."
              quality={90}
            />
          </div>
        </div>

        <div className={style.creatorCard_box_info}>
          <div className={`${style.creatorCard_box_info_svg_box}`}>
            <div style={{ position: "relative" }}>
              {" "}
              <svg
                width="134"
                height="54"
                viewBox="0 0 134 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${style.creatorCard_box_info_svg_box_svg} ${
                  resolvedTheme === "dark" &&
                  style.dark_creatorCard_box_info_svg_box_svg
                }`}
              >
                <path
                  d="M101.734 19.8581C99.2658 17.4194 96.9737 14.8065 94.5052 12.1935C94.1526 11.671 93.6237 11.3226 93.0947 10.8C92.7421 10.4516 92.5658 10.2774 92.2131 9.92903C85.6895 3.83226 76.6974 0 67 0C57.3026 0 48.3105 3.83226 41.6105 9.92903C41.2579 10.2774 41.0816 10.4516 40.7289 10.8C40.2 11.3226 39.8474 11.671 39.3184 12.1935C36.85 14.8065 34.5579 17.4194 32.0895 19.8581C23.2737 28.7419 11.4605 30.4839 -0.176331 30.8323V54H16.3974H32.0895H101.558H110.197H134V30.6581C122.363 30.3097 110.55 28.7419 101.734 19.8581Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className={style.creatorCard_box_info_user_avatar_box}>
                <Image
                  src={creatorPic}
                  alt="creator"
                  width={100}
                  height={100}
                  placeholder="data:image/..."
                  className={style.creatorCard_box_info_user_avatar_box_avatar}
                />{" "}
              </div>
            </div>
          </div>
          <div
            className={`${style.creatorCard_box_info_info_box} ${
              resolvedTheme === "dark" &&
              style.dark_creatorCard_box_info_info_box
            }`}
          >
            <div className={style.creatorCard_box_info_info_box_name}>
              <h3>
                Obi Chris{" "}
                <span style={{ marginLeft: "0.25rem" }}>
                  {" "}
                  <VerifiedSvg />{" "}
                </span>
              </h3>
              <div className={style.creatorCard_box_info_info_box_price_box}>
                {" "}
                <span className={style.creatorCard_box_info_info_box_price}>
                  12.521 <span style={{ color: "gray" }}>ETH</span>
                </span>
              </div>
            </div>

            <button
              className={`${
                style.creatorCard_box_info_info_box_follow_box_btn
              } ${
                resolvedTheme === "dark" &&
                style.dark_creatorCard_box_info_info_box_follow_box_btn
              }`}
              onClick={handleFollow}
              style={{
                background: isFollowing ? "transparent" : "",
                color: isFollowing ? "#374151" : "",
                outline: isFollowing && "none",
                border: isFollowing && "1px solid rgba(226, 232, 240, 0.997)",
              }}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
