import React, { useState } from 'react';
import { TbFilterSearch } from 'react-icons/tb';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { useTheme } from 'next-themes';

//internal imports
import style from './Filter.module.css';
import { Title } from '../ComponentIndex';

import Filters from './Filters/Filters';
const Filter = () => {
  const [filter, setFilter] = useState(true);
  const {resolvedTheme} = useTheme();

  const [activeButton, setActiveButton] = useState('');


  //functions
  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };
 

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };


  return (
    <div className={style.filter}>
      <div className={style.filter_box_title}>
        {" "}
        <Title
          title="Featured NFTs"
          paragraph="Discover the most outstanding NFts in all topics of life."
        />{" "}
      </div>
      <div className={style.filter_box}>
        <div className={`${style.filter_box_left} ${resolvedTheme === "dark" ? style.darkFilterBoxLeft : ""}`}>
          {["All NFTs", "Arts", "Music", "Sports", "Photography"].map(
            (name) => (
              <button
                key={name}
                className={activeButton === name ? style.activeButton : ""}
                onClick={() => {
                  handleButtonClick(name);
                }}
              >
                {name}{" "}
              </button>
            )
          )}
        </div>
        <div className={style.filter_box_right}>
          <button className={`${style.filter_box_right_box} ${resolvedTheme === "dark" ? style.darkFilterBoxRight : ""}`} onClick={openFilter}>
            <TbFilterSearch className={style.filter_box_right_box_icon} />
            <span>Filter</span> &nbsp;
            {filter ? <FaAngleDown /> : <FaAngleUp />}
          </button>
        </div>
      </div>
      {filter && (
        <Filters />
      )}
    </div>
  );
};

export default Filter;
