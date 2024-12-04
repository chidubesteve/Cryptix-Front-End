import React, { useState } from "react";
import { RiUserFollowLine } from "react-icons/ri";
import { MdOutlineNewReleases } from "react-icons/md";
import { useTheme } from "next-themes";
import { LuUserPlus } from "react-icons/lu";

// internal imports
import style from "./CreatorSection.module.css";
import { Button, Title } from "../ComponentIndex";
import CreatorCard from "./CreatorCard/CreatorCard";
import images from "../../images";

const CreatorSection = () => {
  // use a single state to manage selected tab
  const [selectedTab, setSelectedTab] = useState("popular");
  const {resolvedTheme} = useTheme();

  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={style.creator}>
      <div className={style.creator_title}>
        <Title title="Top List Creators." />
      </div>
      <nav className={`${style.creator_tabs}`}>
        <ul
          className={`${style.creator_tabs_list} ${
            resolvedTheme === "dark" && style.dark_creator_tabs_list
          }`}
        >
          <li onClick={() => handleSelectedTab("popular")}>
            <button
              className={
                `${style.creator_tabs_list_btn} ` +
                (selectedTab === "popular" ? style.active : "") +
                (resolvedTheme === "dark" && selectedTab === "popular"
                  ? ` ${style.active_dark}`
                  : "")
              }
            >
              <RiUserFollowLine
                style={{
                  width: "1.3rem",
                  height: "50%",
                  marginRight: ".625rem",
                }}
                className={style.tabIcons}
              />
              Popular
            </button>
          </li>
          <li onClick={() => handleSelectedTab("following")}>
            {" "}
            <button
              className={
                `${style.creator_tabs_list_btn} ` +
                (selectedTab === "following" ? style.active : "") +
                (resolvedTheme === "dark" && selectedTab === "following"
                  ? ` ${style.active_dark}`
                  : "")
              }
            >
              <LuUserPlus
                style={{
                  width: "1.25rem",
                  height: "50%",
                  marginRight: ".625rem",
                  fontWeight: "600",
                }}
                className={style.tabIcons}
              />
              Following
            </button>
          </li>
          <li onClick={() => handleSelectedTab("new&NoteWorthy")}>
            {" "}
            <button
              className={
                `${style.creator_tabs_list_btn} ` +
                (selectedTab === "new&NoteWorthy" ? style.active : "") +
                (resolvedTheme === "dark" && selectedTab === "new&NoteWorthy"
                  ? ` ${style.active_dark}`
                  : "")
              }
            >
              <MdOutlineNewReleases
                style={{
                  width: "1.3rem",
                  height: "50%",
                  marginRight: ".625rem",
                }}
                className={style.tabIcons}
              />
              New & Noteworthy{" "}
            </button>
          </li>
        </ul>
      </nav>

      {/* grid section */}
      <div className={style.creator_card_grid}>
        {selectedTab === "popular" &&
          Array.from({ length: 8 }).map((_, index) => (
            <CreatorCard
              key={index}
              backgroundImage={images[`creatorbackground${index + 1}`]}
              creatorPic={images[`user${index + 1}`]}
            />
          ))}
        {selectedTab === "following" &&
          Array.from({ length: 8 }).map((_, index) => (
            <CreatorCard
              key={index}
              backgroundImage={images[`creatorbackground${index + 1}`]}
              creatorPic={images[`user${index + 1}`]}
            />
          ))}
        {selectedTab === "new&NoteWorthy" &&
          Array.from({ length: 8 }).map((_, index) => (
            <CreatorCard
              key={index}
              backgroundImage={images[`creatorbackground${index + 1}`]}
              creatorPic={images[`user${index + 1}`]}
            />
          ))}
      </div>
      <div className={style.creator_btns}>
        <Button btnName="Become a Creator" className={`${style.creator_btn} ${resolvedTheme === "dark" && style.dark_creator_btn}`} />
        <Button btnName="Show me more" className={`${style.showMore_btn} ${resolvedTheme === "dark" && style.dark_showMore_btn}`} />
      </div>
    </div>
  );
};

export default CreatorSection;
