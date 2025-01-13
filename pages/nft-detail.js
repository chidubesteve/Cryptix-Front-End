import React, { useState } from "react";
import Image from "next/image";
import { BsCameraVideo, BsThreeDots } from "react-icons/bs";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CiExport, CiPercent } from "react-icons/ci";
import { useTheme } from "next-themes";

//internal imports
import style from "../styles/nftDetail.module.css";
import images from "../images";
import { AuctionTimer, Button, Like } from "../components/ComponentIndex";
import VerifiedSvg from "../utils/verified";
import Link from "next/link";
import CurrentBid from "../components/CurrentBid/CurrentBid";
import { IoWalletOutline } from "react-icons/io5";
import nftTransactions from "../utils/nftTransactions";

const Nft_Detail = () => {
  const [isNftLiked, setIsNftLiked] = useState(false);
  const { resolvedTheme } = useTheme();

  const toggleNftLike = () => {
    setIsNftLiked((prev) => !prev);
  };
  return (
    <div className={style.nftDetail}>
      <div className={style.nftDetail_grid_box}>
        <div className={style.nftDetail_grid_box_left}>
          <div className={style.nftDetail_grid_box_left_img_box}>
            <Image
              src={images.nft_image_1}
              alt="nft"
              width={300}
              height={600}
              className={style.nftDetail_grid_box_left_img_box_img}
              quality={100}
            />
            <Like
              isLiked={isNftLiked}
              handleClick={toggleNftLike}
              customStyle={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                zIndex: 10,
                padding: "8px",
              }}
            />
            <div className={style.nftDetail_grid_box_left_img_box_vid_icon_box}>
              <BsCameraVideo
                className={style.nftDetail_grid_box_left_img_box_vid_icon_icon}
              />
            </div>
          </div>

          <div className={style.nftDetail_grid_box_left_buttons_box}>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton
                    className={`${
                      style.nftDetail_grid_box_left_buttons_box_description_btn
                    } ${
                      resolvedTheme === "dark" &&
                      style.dark_nftDetail_grid_box_left_buttons_box_description_btn
                    }`}
                  >
                    <span>Description</span>
                    {open ? (
                      <FaMinus className={style.disclosure_icon} />
                    ) : (
                      <FaPlus className={style.disclosure_icon} />
                    )}
                  </DisclosureButton>
                  <DisclosurePanel
                    className={`${
                      style.nftDetail_grid_box_left_buttons_box_description_info
                    } ${
                      resolvedTheme === "dark" &&
                      style.dark_nftDetail_grid_box_left_buttons_box_description_info
                    }`}
                  >
                    Tattooed Kitty Gang (“TKG”) is a collection of 666 badass
                    kitty gangsters, with symbol of tattoos, living in the Proud
                    Kitty Gang (“PKG”) metaverse. Each TKG is an 1/1 ID as
                    gangster member & all the joint rights.
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton
                    className={`${
                      style.nftDetail_grid_box_left_buttons_box_description_btn
                    } ${
                      resolvedTheme === "dark" &&
                      style.dark_nftDetail_grid_box_left_buttons_box_description_btn
                    }`}
                  >
                    <span>Details</span>
                    {open ? (
                      <FaMinus className={style.disclosure_icon} />
                    ) : (
                      <FaPlus className={style.disclosure_icon} />
                    )}
                  </DisclosureButton>
                  <DisclosurePanel
                    className={`${
                      style.nftDetail_grid_box_left_buttons_box_description_info
                    } ${
                      resolvedTheme === "dark" &&
                      style.dark_nftDetail_grid_box_left_buttons_box_description_info
                    }`}
                  >
                    <p>2000 x 2000 px.IMAGE(685KB)</p>
                    <br />
                    <p>Contract Address</p>
                    <p>
                      <b>0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a</b>
                    </p>
                    <br />
                    <p>Token ID</p>
                    <p>
                      <b>1003764</b>
                    </p>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton
                    className={`${
                      style.nftDetail_grid_box_left_buttons_box_description_btn
                    } ${
                      resolvedTheme === "dark" &&
                      style.dark_nftDetail_grid_box_left_buttons_box_description_btn
                    }`}
                  >
                    <span>FAQ</span>
                    {open ? (
                      <FaMinus className={style.disclosure_icon} />
                    ) : (
                      <FaPlus className={style.disclosure_icon} />
                    )}
                  </DisclosureButton>
                  <DisclosurePanel
                    className={`
                      ${
                        style.nftDetail_grid_box_left_buttons_box_description_info
                      }
                      ${
                        resolvedTheme === "dark" &&
                        style.dark_nftDetail_grid_box_left_buttons_box_description_info
                      }`}
                  >
                    <ul>
                      <li>
                        All full-priced, unworn items, with tags attached and in
                        their original packaging are eligible for return or
                        exchange within 30 days of placing your order.
                      </li>
                      <li>
                        Please note, packs must be returned in full. We do not
                        accept partial returns of packs.
                      </li>
                      <li>
                        Want to know our full returns policies? Here you go.
                      </li>
                      <li>
                        Want more info about shipping, materials or care
                        instructions? Here!
                      </li>
                    </ul>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div
          className={`${style.nftDetail_grid_box_right} ${
            resolvedTheme === "dark" && style.dark_nftDetail_grid_box_right
          }`}
        >
          <div className={style.nftDetail_grid_box_right_details_box}>
            <div
              className={
                style.nftDetail_grid_box_right_details_box_name_creator_and_collection_box
              }
            >
              <div
                className={
                  style.nftDetail_grid_box_right_details_box_name_creator_and_collection_box_collection
                }
              >
                <Link href="/collection">
                  <span>Virtual Animals</span>
                </Link>
                <div
                  className={`${
                    style.nftDetail_grid_box_right_details_box_name_creator_and_collection_box_collection_miscellaneous_box
                  } ${
                    resolvedTheme === "dark" &&
                    style.dark_nftDetail_grid_box_right_details_box_name_creator_and_collection_box_collection_miscellaneous_box
                  }`}
                >
                  <button>
                    <CiExport size={26} />
                  </button>
                  <button>
                    <BsThreeDots size={23} />
                  </button>
                </div>
              </div>
              <h2
                className={
                  style.nftDetail_grid_box_right_details_box_name_creator_and_collection_box_creator_nft_name
                }
              >
                BearX #3636
              </h2>
              <div
                className={`${
                  style.nftDetail_grid_box_right_details_box_name_creator_and_collection_box_creator_nft_creator
                } ${
                  resolvedTheme === "dark" &&
                  style.dark_nftDetail_grid_box_right_details_box_name_creator_and_collection_box_creator_nft_creator
                }`}
              >
                <Link href="/author-profile">
                  <div>
                    <Image
                      src={images.user1}
                      width={40}
                      height={40}
                      alt="nft creator"
                      className={
                        style.nftDetail_grid_box_right_details_box_name_creator_and_collection_box_creator_nft_creator_img
                      }
                    />
                    <div
                      className={
                        style.nftDetail_grid_box_right_details_box_name_creator_and_collection_box_creator_nft_creator_collection_info
                      }
                    >
                      <span>Creator</span>
                      <h5>
                        Karli Rogers
                        <VerifiedSvg customStyle={style.verified_svg} />
                      </h5>
                    </div>
                  </div>
                </Link>
                <div
                  className={
                    style.nftDetail_grid_box_right_details_box_name_creator_and_collection_box_creator_nft_creator_divider
                  }
                ></div>
                <Link href="/author-profile">
                  <div>
                    <Image
                      src={images.collection}
                      width={40}
                      height={40}
                      alt="nft collection"
                      className={
                        style.nftDetail_grid_box_right_details_box_name_creator_and_collection_box_creator_nft_creator_img
                      }
                    />
                    <div
                      className={
                        style.nftDetail_grid_box_right_details_box_name_creator_and_collection_box_creator_nft_creator_collection_info
                      }
                    >
                      <span>Collection</span>
                      <h5>
                        The space bear{" "}
                        <VerifiedSvg customStyle={style.verified_svg} />
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`${
                style.nftDetail_grid_box_right_details_box_auction_timer_box
              } ${
                resolvedTheme === "dark" &&
                style.dark_nftDetail_grid_box_right_details_box_auction_timer_box
              }`}
            >
              <AuctionTimer days="01" hours="02" minutes="03" seconds="04" />
            </div>
            <div
              className={`${style.nftDetail_grid_box_right_details_box_bid_box}`}
            >
              <CurrentBid price="1.00" />
              <span>[20 in stock]</span>
            </div>
            <div
              className={`${style.nftDetail_grid_box_right_details_box_action_buttons} ${resolvedTheme === "dark" && style.dark_nftDetail_grid_box_right_details_box_action_buttons}`}
            >
              <Button
                btnName="Place a bid"
                icon={<IoWalletOutline size={26} />}
                href="/connect-wallet"
                className={`${
                  style.nftDetail_grid_box_right_details_box_action_buttons_btn1
                } ${
                  resolvedTheme === "dark" &&
                  style.dark_nftDetail_grid_box_right_details_box_action_buttons_btn1
                }`}
              />
              <Button
                btnName="Make offer"
                icon={<CiPercent size={26} />}
                href="/connect-wallet"
                className={`${
                  style.nftDetail_grid_box_right_details_box_action_buttons_btn2
                } ${
                  resolvedTheme === "dark" &&
                  style.dark_nftDetail_grid_box_right_details_box_action_buttons_btn2
                }`}
              />
            </div>
            <div
              className={
                style.nftDetail_grid_box_right_details_box_transactions
              }
            >
              <div
                className={
                  style.nftDetail_grid_box_right_details_box_transactions_tabs
                }
              >
                <TabGroup>
                  <TabList className={style.nftDetail_grid_box_right_details_box_transactions_tabs_tabs}>
                    {nftTransactions?.map(({ tab }) => (
                      <Tab
                        key={tab}
                        className={({ selected, hover }) =>
                         `${ style.nftDetail_grid_box_right_details_box_transactions_tabs_tab} ${resolvedTheme === "dark" && style.dark_nftDetail_grid_box_right_details_box_transactions_tabs_tab} ${hover && (resolvedTheme === "dark" ? style.dak_nftDetail_grid_box_right_details_box_transactions_tabs_tab_hover : style.nftDetail_grid_box_right_details_box_transactions_tabs_tab_hover)} ${selected && (resolvedTheme === "dark" ? style.dark_nftDetail_grid_box_right_details_box_transactions_tabs_tab_selected : style.nftDetail_grid_box_right_details_box_transactions_tabs_tab_selected)}`
                        }
                      >
                        {tab}
                      </Tab>
                    ))}
                  </TabList>
                  <TabPanels style={{marginTop: "1rem"}}>
                    {nftTransactions?.map(({ data }, index) => (
                      <TabPanel key={index}>
                        <ul
                          className={
                            style.nftDetail_grid_box_right_details_box_transactions_tabs_tabpanels
                          }
                        >
                          {data?.map(
                            ({ action, userProfileUrl, date, time }, index) => (
                              <li
                                key={index}
                                className={
                                  `${style.nftDetail_grid_box_right_details_box_transactions_tabs_tabpanels_li} ${resolvedTheme === "dark" && style.dark_nftDetail_grid_box_right_details_box_transactions_tabs_tabpanels_li}`
                                }
                              >
                                <div>
                                  <Image
                                    src={userProfileUrl}
                                    width={70}
                                    height={70}
                                    alt="nft creator"
                                    className={
                                      style.nftDetail_grid_box_right_details_box_transactions_tabs_tabpanels_li_img
                                    }
                                  />
                                  <div
                                    className={
                                      style.nftDetail_grid_box_right_details_box_transactions_tabs_tabpanels_li_info
                                    }
                                  >
                                    <span>{action}</span>
                                    <div>
                                      <span>{date}</span> &ndash;{" "}
                                      <span>{time}</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft_Detail;
