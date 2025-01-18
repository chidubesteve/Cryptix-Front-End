import React, { useEffect, useState } from "react";
import { BsInstagram, BsThreeDots } from "react-icons/bs";
import { TbFlag } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaCheck, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { RxCopy } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
// internal imports
import style from "../styles/pages/author.module.css";
import images from "../images";
import Banner from "../components/Banner/Banner";
import { useTheme } from "next-themes";
import { Brand, CreatorSection, NFTCards } from "../components/ComponentIndex";
import CustomDropdown from "../components/CustomDropdown/CustomDropdown";
import VerifiedSvg from "../utils/verified";
import CreatorCard from "../components/CreatorSection/CreatorCard/CreatorCard";

const tabs = ["Collectibles", "Created", "Liked", "Following", "Followers"];
const selections = [
  "Most recent",
  "Curated by Admin",
  "Most liked",
  "Most viewed",
];
  //function to copy text to clipboard
  export const copy = (text) => {
    navigator.clipboard
      ?.writeText(text)
      .then(() => {
        console.log("copied");
      })
      .catch((e) => {
        console.log(e);
      });
  };
const author = () => {
  const [isFollowing, setIsFollowing] = useState(true);
  const [selectedDropDownFilter, setSelectedDropDownFilter] = useState(
    selections[0]
  );
  const [isCustomDropDownOpen, setIsCustomDropDownOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Collectibles");
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { tab } = router.query;
      if (tabs?.includes(tab?.charAt(0).toUpperCase() + tab?.slice(1))) {
        setSelectedTab(tab.charAt(0).toUpperCase() + tab.slice(1));
      } else {
        setSelectedTab("Collectibles");
      }
      console.log(tab);
    }
  }, [router.query]);

  const handleOpenCustomDropdown = () => {
    if (!isCustomDropDownOpen) {
      setIsCustomDropDownOpen(true);
    } else {
      setIsCustomDropDownOpen(false);
    }
  };



  const childrenObj = [
    {
      name: "Report abuse",
      icon: <TbFlag size={28} />,
    },
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Collectibles":
        return <NFTCards />;
      case "Created":
        return <NFTCards />;
      case "Liked":
        return <NFTCards />;
      case "Following":
        return (
          <div>
            {Array.from({ length: 8 }).map((_, i) => (
              <CreatorCard
                creatorPic={images[`user${i + 1}`]}
                backgroundImage={images[`creatorbackground${i + 1}`]}
                key={i}
              />
            ))}
          </div>
        );
      case "Followers":
        return (
          <div>
            {Array.from({ length: 6 }).map((_, i) => (
              <CreatorCard
                creatorPic={images[`user${i + 2}`]}
                backgroundImage={images[`creatorbackground${i + 2}`]}
                key={i}
              />
            ))}
          </div>
        );
      default:
        return <NFTCards />;
    }
  };
  return (
    <div className={style.author}>
      <div className={style.author_box_wrapper}>
        <Banner bannerImg={images.creatorbackground4} />
        <div className={style.author_box}>
          <div className={style.author_box_profile_box}>
            <div
              className={`${style.author_box_profile_box_box} ${
                resolvedTheme === "dark" &&
                style.dark_author_box_profile_box_box
              }`}
            >
              <div className={style.author_box_profile_box_box_user_box}>
                <div className={style.author_box_profile_box_box_img}>
                  <Image
                    src={images.user2}
                    alt="user profile"
                    width={100}
                    height={100}
                    className={style.author_box_profile_box_box_img_img}
                    quality={90}
                  />
                </div>
                <div className={style.author_box_profile_box_box_author_info}>
                  <div
                    className={
                      style.author_box_profile_box_box_author_info_details
                    }
                  >
                    <div
                      className={
                        style.author_box_profile_box_box_author__info_name
                      }
                    >
                      <h2>
                        Vitalik Buterin{" "}
                        <span className={style.verified}>
                          <VerifiedSvg customStyle={style.verified_icon} />
                        </span>
                      </h2>
                      <div
                        className={
                          style.author_box_profile_box_box_author__info_name_address
                        }
                      >
                        0xab5801a....9aec9b{" "}
                        <RxCopy
                          className={style.copy_icon}
                          onClick={copy("0xab5801a....9aec9b")}
                        />
                      </div>
                      <span
                        className={
                          style.author_box_profile_box_box_author__info_name_bio
                        }
                      >
                        Punk #4786 / An OG Cryptopunk Collector, hoarder of
                        NFTs. Contributing to @ether_cards, an NFT Monetization
                        Platform.
                      </span>
                    </div>
                    <div
                      className={
                        style.author_box_profile_box_box_author__info_social
                      }
                    >
                      <FaFacebook
                        size={28}
                        className={style.socials_icon}
                        title="Facebook"
                      />
                      <FaLinkedin
                        size={28}
                        className={style.socials_icon}
                        title="Linkedin"
                      />
                      <FaXTwitter
                        size={28}
                        className={style.socials_icon}
                        title="Twitter"
                      />
                      <BsInstagram
                        size={28}
                        className={style.socials_icon}
                        title="Instagram"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={style.author_box_profile_box_box_author__right_box}
              >
                <button
                  className={`${
                    style.author_box_profile_box_box_author__right_box_follow_btn
                  } ${
                    resolvedTheme === "dark" &&
                    style.dark_author_box_profile_box_box_author__right_box_follow_btn
                  }`}
                  style={{
                    background: isFollowing ? "transparent" : "",
                    color: isFollowing ? "#374151" : "",
                    outline: isFollowing && "none",
                    border:
                      isFollowing && "1px solid rgba(226, 232, 240, 0.997)",
                  }}
                  onClick={() => setIsFollowing(!isFollowing)}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
                <button
                  onClick={handleOpenCustomDropdown}
                  className={`${
                    style.author_box_profile_box_box_author__right_box_report_btn
                  } ${
                    resolvedTheme === "dark" &&
                    style.dark_author_box_profile_box_box_author__right_box_report_btn
                  }`}
                >
                  <BsThreeDots />
                </button>
              </div>
            </div>
            {isCustomDropDownOpen && (
              <CustomDropdown
                childrenObj={childrenObj}
                className={
                  style.author_box_profile_box_box_author__right_box_report_dropdown
                }
              />
            )}
          </div>
          <div className={style.author_box_profile_box_tabs_box}>
            <div className={style.author_box_profile_box_tabs_flex_box}>
              <nav className={style.author_box_profile_box_tabs_nav}>
                <ul>
                  {tabs.map((tab, i) => (
                    <li
                      key={i}
                      className={`${style.author_box_profile_box_tab} ${
                        selectedTab === tab && style.activeTab
                      } ${
                        resolvedTheme === "dark" &&
                        style.dark_author_box_profile_box_tab
                      }`}
                    >
                      <Link
                        href={`?tab=${tab.toLocaleLowerCase()}`}
                        scroll={false}
                      >
                        {tab}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Listbox
                className={style.author_box_profile_box_selection_dropdown}
                as="div"
                onChange={(e) => {
                  setSelectedDropDownFilter(e);
                }}
              >
                <div
                  className={
                    style.author_box_profile_box_selection_dropdown_box
                  }
                >
                  <ListboxButton
                    className={`${
                      style.author_box_profile_box_selection_dropdown_button
                    } ${
                      resolvedTheme === "dark" &&
                      style.dark_author_box_profile_box_selection_dropdown_button
                    }`}
                  >
                    {({ open }) => (
                      <>
                        {selectedDropDownFilter}
                        {open ? (
                          <MdOutlineKeyboardArrowUp
                            className={style.dropdown_icon}
                          />
                        ) : (
                          <MdOutlineKeyboardArrowDown
                            className={style.dropdown_icon}
                          />
                        )}
                      </>
                    )}
                  </ListboxButton>
                  <ListboxOptions
                    className={`${style.author_box_profile_box_selection_dropdown_options}`}
                  >
                    {selections.map((selection, i) => (
                      <ListboxOption
                        key={i}
                        value={selection}
                        className={`${
                          style.author_box_profile_box_selection_dropdown_option
                        } ${
                          resolvedTheme === "dark" &&
                          style.dark_author_box_profile_box_selection_dropdown_option
                        }`}
                      >
                        {({ selected }) => (
                          <div className={style.option_content}>
                            {selected && (
                              <div className={style.check_box}>
                                <FaCheck className={style.check_icon} />
                              </div>
                            )}
                            <span>{selection}</span>
                          </div>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>
            <div className={style.author_box_profile_box_tab_content}>
              {renderTabContent()}
            </div>
          </div>

          <CreatorSection />
          <Brand />
        </div>
      </div>
    </div>
  );
};

export default author;
