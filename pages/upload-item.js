import React, { useState } from "react";
import { useTheme } from "next-themes";

//internal imports
import style from "../styles/pages/upload-item.module.css";
import { Title } from "../components/ComponentIndex";
import { UploadNftForm } from "../components/UploadItemPage/UploadItemPageIndex";

const uploadItem = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={style.uploadItem}>
      <div className={style.uploadItem_box}>
        <div className={style.uploadItem_box_title}>
          <Title
            title={"Create new NFT"}
            paragraph={
              "You can upload, set the royalty, category, properties and link to your NFT in the marketplace and much more"
            }
            p_style={{ fontSize: "1.2rem", marginBottom: "0" }}
          />
        </div>
        <hr
          className={`${style.uploadItem_box_demarcation} ${
            resolvedTheme === "dark" && style.dark_uploadItem_box_demarcation
          }`}
        />

        <div
          className={`${style.uploadItem_box_form_upload_box} ${
            resolvedTheme === "dark" &&
            style.dark_uploadItem_box_form_upload_box
          }`}
        >
          <h3>Image, Video, Audio, or 3D Model</h3>
          <span>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 10 MB
          </span>
          <div style={{ marginTop: "1.5rem" }}>
            <UploadNftForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default uploadItem;
