import React from "react";
import { useTheme } from "next-themes";

//internal imports
import style from "../styles/pages/search.module.css";
import {
  Banner,
  Brand,
  Collection,
  Filter,
  SearchBar,
} from "../components/ComponentIndex";

const search = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className={style.search_page}>
      <div className={style.search_page_box}>
        <div className={style.search_page_box_banner_wrapper}>
          <Banner />
        </div>
        <div className={style.search_page_box_search_wrapper}>

        <SearchBar />
        </div>
        <div className={style.search_page_box_filter_wrapper}>
          <Filter bgColor={resolvedTheme === "dark" ? "#111827" : "#fff"} />
        </div>
        <div className={style.search_page_box_collection_wrapper}>
          <Collection />
        </div>
        <div className={style.search_page_box_brand_wrapper}>
          <Brand />
        </div>
      </div>
    </div>
  );
};

export default search;
