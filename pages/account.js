import React, { useState, useMemo, useCallback, useContext } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BiImageAdd } from "react-icons/bi";

// internal imports
import style from "../styles/account.module.css";
import images from "../images";
import Form from "../components/AccountPage/Form";
import Title from "../components/Title/Title";

const account = () => {
  const [fileURL, setFileURL] = useState(null);
  const { resolvedTheme } = useTheme();
  return (
    <div className={style.account_page}>
      <div className={style.account_page_box}>
        <div className={style.account_page_box_title}>
          <Title
            title={"Profile Settings"}
            paragraph={
              "You can set preferred display name, change your bio, email and manage other personal settings."
            }
          />
        </div>
        <div
          className={`${style.account_page_demarcation_border} ${
            resolvedTheme === "dark" &&
            style.dark_account_page_demarcation_border
          }`}
        ></div>

        <div className={style.account_page_box_form_box}>
          <div
            className={style.account_page_box_form_box_profile_pic_upload_box}
          >
            <Image
              src={images.user9}
              width={150}
              height={150}
              alt="user 9"
              className={
                style.account_page_box_form_box_profile_pic_upload_box_img
              }
            />
            <div
              className={
                style.account_page_box_form_box_profile_pic_upload_box_btn
              }
            >
              <input type="file" name="Choose a file" id="file_upload_button" className={style.account_page_box_form_box_profile_pic_upload_box_btn_input} accept="image/*"/>
              <BiImageAdd className={style.account_page_box_form_box_profile_pic_upload_box_btn_icon} />
              <span>Change photo</span>
            </div>
          </div>
          <div className={style.account_page_box_form_box_form}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default account;
