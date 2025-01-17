import React, { useRef } from "react";
import { FiMail } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { PiTiktokLogoLight } from "react-icons/pi";
import { RxCopy } from "react-icons/rx";
import { LuFacebook } from "react-icons/lu";
import { useTheme } from "next-themes";
import { Field, Fieldset, Input, Label, Textarea } from "@headlessui/react";

// internal imports
import style from "./Form.module.css";
import { copy } from "../../pages/author-profile";
import { input } from "motion/react-client";
import { Button } from "../ComponentIndex";

const Form = () => {
  const { resolvedTheme } = useTheme();
  const walletAddressRef = useRef(null);

  return (
    <Fieldset
      className={`${style.form_fieldset} ${
        resolvedTheme === "dark" && style.dark_form_fieldset
      }`}
    >
      <Field>
        <Label>Username</Label>
        <Input
          name="username"
          type="text"
          placeholder="John Doe"
          className={style.form_fieldset_username_input}
        />
      </Field>
      <Field>
        <Label>Email</Label>
        <div
          className={`${style.form_fieldset_email} ${
            resolvedTheme === "dark" && style.dark_form_fieldset_email
          }`}
        >
          <div>
            <FiMail
              className={`${style.form_fieldset_email_icon} ${
                resolvedTheme === "dark" && style.dark_form_fieldset_email_icon
              }`}
            />
          </div>
          <Input
            name="email"
            type="email"
            placeholder="cGtGZ@example.com"
            className={`${style.form_fieldset_email_input} ${
              resolvedTheme === "dark" && style.dark_form_fieldset_email_input
            }`}
          />
        </div>
      </Field>
      <Field>
        <Label>Bio</Label>
        <Textarea
          name="bio"
          placeholder="Somethings about you in a few words"
          rows={5}
          spellCheck={false}
          className={style.form_fieldset_bio}
        ></Textarea>
      </Field>
      <Field>
        <Label>Website</Label>
        <div
          className={`${style.form_fieldset_website} ${
            resolvedTheme === "dark" && style.dark_form_fieldset_website
          }`}
        >
          <div>
            <TbWorld
              className={`${style.form_fieldset_website_icon} ${
                resolvedTheme === "dark" &&
                style.dark_form_fieldset_website_icon
              }`}
            />
          </div>
          <Input
            name="website"
            type="url"
            placeholder="https://example.com"
            className={`${style.form_fieldset_website_input} ${
              resolvedTheme === "dark" && style.dark_form_fieldset_website_input
            }`}
          />
        </div>
      </Field>
      <div className={style.form_fieldset_socials_grid}>
        <Field className={style.form_fieldset_socials_grid_input_box}>
          <Label>Twitter</Label>
          <div
            className={`${style.form_fieldset_socials_grid_icon} ${
              resolvedTheme === "dark" &&
              style.dark_form_fieldset_socials_grid_icon
            }`}
          >
            <div>
              <FaXTwitter
                className={`${style.form_fieldset_socials_grid_icon_icon} ${
                  resolvedTheme === "dark" &&
                  style.dark_form_fieldset_socials_grid_icon_icon
                }`}
              />
            </div>
            <Input
              name="twitter"
              type="url"
              placeholder="yourtwitter"
              className={`${style.form_fieldset_socials_grid_icon_input} ${
                resolvedTheme === "dark" &&
                style.dark_form_fieldset_socials_grid_icon_input
              }`}
            />
          </div>
        </Field>
        <Field className={style.form_fieldset_socials_grid_input_box}>
          <Label>Facebook</Label>
          <div
            className={`${style.form_fieldset_socials_grid_icon} ${
              resolvedTheme === "dark" &&
              style.dark_form_fieldset_socials_grid_icon
            }`}
          >
            <div>
              <LuFacebook
                className={`${style.form_fieldset_socials_grid_icon_icon} ${
                  resolvedTheme === "dark" &&
                  style.dark_form_fieldset_socials_grid_icon_icon
                }`}
              />
            </div>
            <Input
              name="facebook"
              type="url"
              placeholder="yourfacebook"
              className={`${style.form_fieldset_socials_grid_icon_input} ${
                resolvedTheme === "dark" &&
                style.dark_form_fieldset_socials_grid_icon_input
              }`}
            />
          </div>
        </Field>
        <Field className={style.form_fieldset_socials_grid_input_box}>
          <Label>TikTok</Label>
          <div
            className={`${style.form_fieldset_socials_grid_icon} ${
              resolvedTheme === "dark" &&
              style.dark_form_fieldset_socials_grid_icon
            }`}
          >
            <div>
              <PiTiktokLogoLight
                className={`${style.form_fieldset_socials_grid_icon_icon} ${
                  resolvedTheme === "dark" &&
                  style.dark_form_fieldset_socials_grid_icon_icon
                }`}
              />
            </div>
            <Input
              name="tiktok"
              type="url"
              placeholder="yourtiktok"
              className={`${style.form_fieldset_socials_grid_icon_input} ${
                resolvedTheme === "dark" &&
                style.dark_form_fieldset_socials_grid_icon_input
              }`}
            />
          </div>
        </Field>
      </div>
      <Field disabled>
        <Label>Wallet Address</Label>
        <div className={style.form_fieldset_wallet}>
          <Input
            name="wallet address"
            type="text"
            value="0x1bde388826caab77bfe80148abdce6830606e2c6"
            className={style.form_fieldset_wallet_input}
            ref={walletAddressRef}
          />
          <RxCopy
            onClick={copy(walletAddressRef.current?.value)}
            className={`${style.form_fieldset_wallet_icon} ${
              resolvedTheme === "dark" && style.dark_form_fieldset_wallet_icon
            }`}
          />
        </div>
      </Field>
      <Button btnName="Update profile" className={style.form_btn} />
    </Fieldset>
  );
};

export default Form;
