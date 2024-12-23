import React from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { useTheme } from "next-themes";

//INTERNAL IMPORT
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const { resolvedTheme } = useTheme();
  return (
    <header className={style.searchBar_header}>
      <form method="post" className={style.searchBar_form}>
        <label htmlFor="search-input" className={style.searchBar_form_label}>
          <span className={style.searchBar_form_label_icon}>
            <FiSearch />
          </span>
          <input
            type="search"
            name="search"
            id="search-input"
            placeholder="Type your keyword"
            className={`${style.searchBar_form_label_input} ${
              resolvedTheme === "dark" && style.dark_searchBar_form_label_input
            }`}
          />
          <button
            type="submit"
            className={style.searchBar_form_label_search_submit_button}
          >
            <FiArrowRight
              className={style.searchBar_form_label_search_submit_button_icon}
            />
          </button>
        </label>
      </form>
    </header>
  );
};

export default SearchBar;
