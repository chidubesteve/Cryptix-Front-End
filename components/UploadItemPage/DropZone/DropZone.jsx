import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTheme } from "next-themes";
import { LuImagePlus } from "react-icons/lu";

//internal imports
import style from "./DropZone.module.css";
import images from "../../../images";




const DropZone = ({
  setFile,
  file,
  fileName,
  setFileName,
  website,
  description,
  selectedCategory,
  royalties,
  nftProperties,
  quantity,
}) => {
  const [filePreview, setFilePreview] = useState(null); //store preview
  const { resolvedTheme } = useTheme();

  const handlePropertiesParse = (nftProperties) => {
    if (nftProperties && nftProperties.length > 0) {
      console.log(nftProperties);
      return nftProperties.join(", ");
    }
    return "";
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (!acceptedFiles || acceptedFiles.length === 0) return;

      const selectedFile = acceptedFiles[0];
      setFile(selectedFile); // update parent state

      //Generate preview
      const reader = new FileReader();
      reader.onload = () => {
        setFilePreview(reader.result);
        setFileName(selectedFile.name); //update the file name in parent component
      };
      reader.readAsDataURL(selectedFile);
    },
    [setFileName, setFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 10, // 10mb limit
  });

  return (
    <>
      <section
        className={`${style.uploadNftForm_box_dropZone_box} ${
          resolvedTheme === "dark" && style.dark_uploadNftForm_box_dropZone_box
        }`}
        style={{
          borderColor: isDragActive && "#1c8cb1",
        }}
      >
        <div
          {...getRootProps()}
          className={style.DropZone_box}
          style={{
            cursor: isDragActive && "grabbing",
          }}
        >
          <input {...getInputProps()} />
          <LuImagePlus className={style.DropZone_box_icon} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <>
              <p>Drag and drop, or click to select a file</p>
              <small>up to 10mb</small>
            </>
          )}
        </div>
      </section>

      {/* Preview and Details */}
      {file && (
        <aside className={`${style.DropZone_box_aside} ${resolvedTheme === "dark" && style.dark_DropZone_box_aside}`}>
          {filePreview ? (
            <Image
              src={filePreview || images.defaultImage}
              width={600}
              height={100}
              alt="uploaded image"
              className={style.uploadNftForm_box_dropZone_box_image}
            />
          ) : (
            <>
              <small>Failed to load image preview</small>
            </>
          )}
          <div className={style.DropZone_box_aside_preview}>
            <div className={style.DropZone_box_aside_preview_one}>
              <span>
                <label>NFT name: </label>
                <p>{fileName || "Untitled"}</p>
              </span>
              <span>
                <label>Website: </label>
                <p>{website || "N/A"}</p>
              </span>
            </div>
            <div className={style.DropZone_box_aside_preview_two}>
              <span>
                <label>Description: </label>
                <p>{description || "N/A"}</p>
              </span>
            </div>
            <div className={style.DropZone_box_aside_preview_three}>
              <span>
                <label>Category: </label>
                <p>{selectedCategory || "N/A"}</p>
              </span>
              <span>
                <label>Quantity: </label>
                <p>{quantity || "N/A"}</p>
              </span>
              <span>
                <label>Royalties: </label>
                <p>{royalties || "N/A"}</p>
              </span>
              <span>
                <label>Properties: </label>
                <p className={style.DropZone_box_aside_preview_three_properties}>{handlePropertiesParse(nftProperties) || "N/A"}</p>
              </span>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default DropZone;
