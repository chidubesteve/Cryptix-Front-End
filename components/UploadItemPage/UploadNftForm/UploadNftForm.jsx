import React, { useState, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Radio,
  RadioGroup,
  Switch,
  Textarea,
} from "@headlessui/react";
import { useTheme } from "next-themes";

// internal imports
import style from "./UploadNftForm.module.css";
import images from "../../../images";
import { DropZone } from "../UploadItemPageIndex";
import { Button } from "../../ComponentIndex";
import { CategoryArray } from "../../Category/Category";
import InputTag from "../../InputTag/InputTag";

const UploadNftForm = () => {
  const [file, setFile] = useState(null); // manage uploaded file
  const [selectedCategory, setSelectedCategory] = useState(
    CategoryArray[0].title
  );
  const [fileName, setFileName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [quantity, setQuantity] = useState("");
  const [nftProperties, setNftProperties] = useState([]);
  const [isPutOnSale, setIsPutOnSale] = useState(true);
  const [isInstantSalePrice, setIsInstantSalePrice] = useState(false);
  const [isUnlockedOncePurchased, setIsUnlockedOncePurchased] = useState(true);

  const { resolvedTheme } = useTheme();

  const handlePutOnSaleChange = () => setIsPutOnSale((prev) => !prev);
  const handleInstantSaleChange = () => setIsInstantSalePrice((prev) => !prev);
  const handleUnlockChange = () => setIsUnlockedOncePurchased((prev) => !prev);

  return (
    <div>
      <form method="post" id="upload_item" className={style.uploadNftForm_box}>
        <div className={style.uploadNftForm_box_dropZone}>
          <DropZone
            setFile={setFile}
            file={file}
            fileName={fileName}
            setFileName={setFileName}
            website={website}
            description={description}
            selectedCategory={selectedCategory}
            quantity={quantity}
            royalties={royalties}
            nftProperties={nftProperties}
          />
        </div>
        <Fieldset
          className={`${style.uploadNftForm_box_form_fieldset} ${
            resolvedTheme === "dark" &&
            style.dark_uploadNftForm_box_form_fieldset
          }`}
        >
          <Field className={style.form_fieldset_item}>
            <Label>Item Name</Label>
            <Input
              name="item name"
              type="text"
              placeholder="NFT name"
              className={style.form_fieldset_item_name_input}
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </Field>
          <Field className={style.form_fieldset_item}>
            <Label>External link</Label>
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
                name="external link"
                type="url"
                placeholder="https://abc.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className={`${style.form_fieldset_website_input} ${
                  resolvedTheme === "dark" &&
                  style.dark_form_fieldset_website_input
                }`}
              />
            </div>
            <Description className={style.form_fieldset_website_description}>
              Cryptix will include a link to this URL on this item's detail
              page, so that users can click to learn more about it. You are
              welcome to link to your own webpage with more details.
            </Description>
          </Field>
          <Field className={style.form_fieldset_item}>
            <Label>Description</Label>
            <Textarea
              name="description"
              placeholder="Describe your item"
              rows={6}
              spellCheck={false}
              className={style.form_fieldset_description_textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Textarea>
            <Description
              className={style.form_fieldset_description_description}
            >
              The description will be included on the item's detail page
              underneath its image.{" "}
              <span style={{ color: "#22C55E", width: "auto" }}>Markdown</span>{" "}
              syntax is supported.
            </Description>
          </Field>
          <hr
            className={`${style.form_fieldset_demarcation} ${
              resolvedTheme === "dark" && style.dark_form_fieldset_demarcation
            }`}
          />

          <div className={style.form_fieldset_category_box}>
            <Label className={style.form_fieldset_category_box_label}>
              Choose category
            </Label>
            <span className={style.form_fieldset_category_box_span}>
              Choose a category to which your nft will belong
            </span>
            <RadioGroup
              value={selectedCategory}
              onChange={setSelectedCategory}
              aria-label="NFT Category"
              form="upload_item"
              className={style.form_fieldset_category_box_radio_group}
            >
              <div className={style.form_fieldset_category_box_scroll}>
                {CategoryArray.map(({ id, title, image }) => (
                  <Field key={id}>
                    <Radio
                      key={id}
                      value={title}
                      className={({ checked }) => {
                        return `${style.form_fieldset_category_box_radio} ${
                          resolvedTheme === "dark"
                            ? style.dark_form_fieldset_category_box_radio
                            : ""
                        } ${
                          checked
                            ? style.form_fieldset_category_box_radio_checked
                            : ""
                        }`;
                      }}
                    >
                      {({ checked }) => (
                        <div
                          className={`${style.form_fieldset_category_box_radio_box}`}
                        >
                          <div
                            className={
                              style.form_fieldset_category_box_radio_box_image
                            }
                          >
                            <div
                              className={
                                style.form_fieldset_category_box_radio_box_image_box
                              }
                            >
                              <Image
                                src={images[image]}
                                alt={title}
                                height={400}
                                width={400}
                                placeholder="data:image/..."
                                className={
                                  style.form_fieldset_category_box_radio_box_image_box_img
                                }
                              />
                              {checked && (
                                <div>
                                  <FaCheckCircle
                                    className={
                                      style.form_fieldset_category_box_radio_icon
                                    }
                                  />
                                </div>
                              )}
                            </div>
                            <p
                              className={
                                style.form_fieldset_category_box_radio_box_title
                              }
                            >
                              {title}
                            </p>
                          </div>
                        </div>
                      )}
                    </Radio>
                  </Field>
                ))}
              </div>
            </RadioGroup>
          </div>
          <div className={style.form_fieldset_form_grid}>
            <div className={style.form_fieldset_form_grid_item}>
              <Field>
                <Label>Quantity</Label>
                <Input
                  name="quantity"
                  type="number"
                  placeholder="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className={style.form_fieldset_form_grid_item_input}
                />
              </Field>
            </div>
            <div className={style.form_fieldset_form_grid_item}>
              <Field>
                <Label>Royalties</Label>
                <Input
                  name="royalties"
                  type="number"
                  placeholder="10%"
                  value={royalties}
                  onChange={(e) => setRoyalties(e.target.value)}
                  className={style.form_fieldset_form_grid_item_input}
                />
              </Field>
            </div>
            <div className={style.form_fieldset_form_grid_item}>
              <Field>
                <Label>Properties</Label>
                <InputTag
                  nftProperties={nftProperties}
                  setNftProperties={setNftProperties}
                />
              </Field>
            </div>
          </div>
          <div className={style.form_fieldset_form_switch_box}>
            <Field className={style.form_fieldset_form_switch_box_item}>
              <div>
                <Label
                  className={style.form_fieldset_form_switch_box_item_label}
                >
                  Put on sale
                </Label>
                <p>You'll receive bids on this item</p>
              </div>
              <Switch
                checked={isPutOnSale}
                onChange={handlePutOnSaleChange}
                className={({ checked }) =>
                  `${style.form_fieldset_form_switch_box_item_switch} ${
                    checked
                      ? style.checked_form_fieldset_form_switch_box_item_switch
                      : ""
                  } ${
                    resolvedTheme === "dark"
                      ? style.dark_form_fieldset_form_switch_box_item_switch
                      : ""
                  }`
                }
              >
                {({ checked }) => (
                  <>
                    <span
                      aria-hidden="true"
                      className={`${style.custom_switch_knob} ${
                        checked && style.checked_knob
                      }`}
                    ></span>
                    <span className={style.screen_readers_only}>
                      Put on sale
                    </span>
                  </>
                )}
              </Switch>
            </Field>
            <Field className={style.form_fieldset_form_switch_box_item}>
              <div>
                <Label
                  className={style.form_fieldset_form_switch_box_item_label}
                >
                  Instant sale price
                </Label>
                <p>
                  Be able to set the price at which the item will be instantly
                  sold
                </p>
              </div>
              <Switch
                checked={isInstantSalePrice}
                onChange={handleInstantSaleChange}
                className={({ checked }) =>
                  `${style.form_fieldset_form_switch_box_item_switch} ${
                    checked
                      ? style.checked_form_fieldset_form_switch_box_item_switch
                      : ""
                  } ${
                    resolvedTheme === "dark"
                      ? style.dark_form_fieldset_form_switch_box_item_switch
                      : ""
                  }`
                }
              >
                {({ checked }) => (
                  <>
                    <span className={style.screen_readers_only}>
                      Instant sale
                    </span>
                    <span
                      aria-hidden="true"
                      className={`${style.custom_switch_knob} ${
                        checked && style.checked_knob
                      }`}
                    ></span>
                  </>
                )}
              </Switch>
            </Field>
            <Field className={style.form_fieldset_form_switch_box_item}>
              <div>
                <Label
                  className={style.form_fieldset_form_switch_box_item_label}
                >
                  Unlock once purchased
                </Label>
                <p>
                  Allow users to unlock unique features after successful
                  transaction
                </p>
              </div>
              <Switch
                checked={isUnlockedOncePurchased}
                onChange={handleUnlockChange}
                className={({ checked }) =>
                  `${style.form_fieldset_form_switch_box_item_switch} ${
                    checked
                      ? style.checked_form_fieldset_form_switch_box_item_switch
                      : ""
                  } ${
                    resolvedTheme === "dark"
                      ? style.dark_form_fieldset_form_switch_box_item_switch
                      : ""
                  }`
                }
              >
                {({ checked }) => (
                  <>
                    <span
                      aria-hidden="true"
                      className={`${style.custom_switch_knob} ${
                        checked && style.checked_knob
                      }`}
                    ></span>
                    <span className={style.screen_readers_only}>
                      Unlock once purchased
                    </span>
                  </>
                )}
              </Switch>
            </Field>
          </div>
        </Fieldset>
        <div className={style.form_fieldset_form_buttons_box}>
          <Button
            type="submit"
            btnName="Upload item"
            className={style.form_fieldset_form_upload_button}
          />
          <Button
            href={"/nft-detail"}
            btnName="Preview item"
            className={`${style.form_fieldset_form_preview_button} ${
              resolvedTheme === "dark" &&
              style.dark_form_fieldset_form_preview_button
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default UploadNftForm;
