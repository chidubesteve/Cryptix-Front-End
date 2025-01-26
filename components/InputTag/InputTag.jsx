import React from "react";
import { WithContext as ReactTags, SEPARATORS } from "react-tag-input";
import { useTheme } from "next-themes";

//internal imports
import style from "./InputTag.module.css";

const InputTag = ({ nftProperties, setNftProperties }) => {
  const { resolvedTheme } = useTheme();
  const tags = nftProperties?.map((prop) => ({ id: prop, text: prop })) || [];

  // method to delete tags
  const handleDelete = (i) => {
    const remainingTags = tags?.filter((_, index) => index !== i);
    setNftProperties(remainingTags?.map((tag) => tag.text));
  };

  // method to add tags
  const handleAddition = (tag) => {
    setNftProperties([...nftProperties, tag.text]);
  };

  // Method to handle drag events
  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags];

    // Reorder the tags
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // Update the state with reordered tags
    setNftProperties(newTags.map((t) => t.text));
  };

  return (
    <div className={style.tags}>
      <ReactTags
        tags={tags}
        separators={[SEPARATORS.COMMA, SEPARATORS.ENTER]}
        maxTags={5}
        inputFieldPosition="top"
        handleDelete={handleDelete}
        handleDrag={handleDrag}
        handleAddition={handleAddition}
        placeholder="Add a property e.g level, rarity"
        name="quantity"
        classNames={{
          tagInputField: style.ReactTags__tagInputField,
          selected: style.ReactTags__selected,
          tagInput: style.ReactTags__tagInput,
          tag: `${style.ReactTags__tag} ${
            resolvedTheme === "dark" && style.dark_ReactTags__tag
          }`,
          remove: `${style.ReactTags__remove} ${
            resolvedTheme === "dark" && style.dark_ReactTags__remove
          }`,
          ReactTags__error: style.ReactTags__error_class,
        }}
        allowAdditionFromPaste
      />
    </div>
  );
};

export default InputTag;
