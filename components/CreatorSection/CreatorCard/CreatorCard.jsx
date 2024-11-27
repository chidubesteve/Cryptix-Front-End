import React, { useState } from "react";

// internal imports
import style from "./CreatorCard.module.css";
import Image from "next/future/image";

const CreatorCard = ({ creatorPic, backgroundImage }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <div className={style.creatorCard}>
      <div className={style.creatorCard_box}>
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
          <div className={style.creatorCard_box_info_svg_box}>
            <div style={{ position: "relative" }}>
              {" "}
              <svg
                width="134"
                height="54"
                viewBox="0 0 134 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={style.creatorCard_box_info_svg_box_svg}
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
          <div className={style.creatorCard_box_info_info_box}>
            <div className={style.creatorCard_box_info_info_box_name}>
              <h3>
                Obi Chris{" "}
                <span style={{ marginLeft: "0.25rem" }}>
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    color="#38BDF8"
                    style={{ color: "#38BDF8" }}
                    height="17"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12z"></path>
                    {/* <!-- Checkmark path with white fill --> */}
                    <path
                      d="M10.09 16.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
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
              className={style.creatorCard_box_info_info_box_follow_box_btn}
              onClick={handleFollow}
              style={{
                background: isFollowing ? "transparent" : "",
                color: isFollowing ? "#374151" : "",
                outline: isFollowing && "none",
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
